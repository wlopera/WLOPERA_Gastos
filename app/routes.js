var Factura = require('./modelo/factura');
var Controller = require ('./controller');

module.exports = function(app) {
	
	// Consultar todas las facturas
	app.get('/api/factura', Controller.getFactura);
	
	// Crear una nueva factura
	app.post('/api/factura', Controller.setFactura);
	
	// Modificar los datos de una factura
	app.put('/api/factura/:factura_id', Controller.updateFactura);
	
	// Borrar una factura
	app.delete('/api/factura/:factura_id', Controller.removeFactura);
	
	// Aplicacion
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga vista inicial
	});

};
