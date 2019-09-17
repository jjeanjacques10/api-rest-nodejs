# Node.js e HTTP: desenvolvendo uma API seguindo o estilo REST

Código desenvolvido no curso da Alura com algumas modificações feitas por mim!

## Para testar a API

```
curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamentos.json | json_pp
```

## Dicas

- Para fazer o express-validator é preciso ter o 2.20.8
- Não se esqueça de subir o MySQL

Busque sempre aprender mais!

https://cursos.alura.com.br/course/nodejs-avancado