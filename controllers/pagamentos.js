module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log('Recebida requisição de teste na porta 3000.')
        res.send('OK');
    });
}

