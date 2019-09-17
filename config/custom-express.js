var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //Obrigatoriamente logo apos o bodyParser
    app.use(expressValidator());

    //adicionar a pasta controllers no app
    consign()
        .include('controllers')
        .then('persistencia')
        .into(app);

    return app;
}