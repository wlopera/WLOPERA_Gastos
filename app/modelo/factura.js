var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var facturaShema = new Schema({
  empresa: {
    type: String
  },
  fecha: {
    type: String
  },
  nroFactura: {
    type: String
  },
  total: {
    type: String
  }
  
});

// Creamos esquema y se asigna a nuestro modelo
var Factura = mongoose.model('Factura', facturaShema);

// Ponemos el modelo disponible a la aplicacion
module.exports = Factura;
