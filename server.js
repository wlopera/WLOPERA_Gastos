var express  = require('express');
var app      = express();                     // Utilizamos express
var mongoose = require('mongoose');           // mongoose para mongodb
var path = require('path');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Configuracion
mongoose.connect('mongodb://localhost:27017/factura');     // Hacemos la conexión a la base de datos de Mongo con nombre "factura"

    app.use(express.static(path.join(__dirname, '/angular')));
    app.use(logger('dev'));            // activamos el log en modo 'dev'
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

// Cargar endpoints
require('./app/routes.js')(app);

// Ambiente
if ('development' == app.get('env')) {
	console.log("Enpoints DEV")
}

var server = http.createServer(app);

app.listen(3000, function () {
  console.log('Servidor arriba. Escuchando puerto 3000');
});

