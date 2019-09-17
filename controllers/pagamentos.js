module.exports = function (app) {
    app.get('/pagamentos', function (req, res) {
        console.log('Recebida requisição de teste na porta 3000.')
        res.send('OK!');
    });

    app.post("/pagamentos/pagamento", function (req, res) {
        var pagamento = req.body;

        req.assert("forma_de_pagamento", "Forma de pagamento é obrigatória.").notEmpty();
        req.assert("valor", "Valor é obrigatório e deve ser um decimal.").notEmpty().isFloat();
        req.assert("moeda", "Moeda é obrigatória e deve ter 3 caracteres").notEmpty().len(3,3);

        var erros = req.validationErrors();

        if(erros){
            console.log('Erros de validação encontrados');
            res.status(400).send(erros);
            return;
        }

        console.log('processando pagamento...');

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamento.status = "CRIADO";
        pagamento.data = new Date;

        pagamentoDao.salva(pagamento, function (exception, result) {
            if(exception){
                console.log('Erro ao inserir no banco:'+ exception);
                res.status(500).send(exception);
            }else{
                console.log('pagamento criado: ' + result);
                res.location('/pagamentos/pagamento/' + result.insertId);
                res.status(201).json(pagamento);
            }
        });
    });
}

