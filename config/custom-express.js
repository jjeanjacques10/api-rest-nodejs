var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());
    

    //adicionar a pasta controllers no app
    consign()
        .include('controllers')
        .into(app);

    return app;
}