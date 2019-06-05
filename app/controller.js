var Factura = require('./modelo/factura');

// Obtiene todas las facturas de la base de datos
function getFactura (req, res){
	Factura.find(
		function(err, factura) {
			if (err) {
				console.log("##=> Error consultando facturas: %o", err);
				res.send("Error Usuario " +  err);
			}
			res.json(factura); // devuelve todas las Facturas en JSON
		}
	);
}

// Guarda una fatura en base de datos
function setFactura(req, res) {
	Factura.create(
		{	
			empresa : req.body.empresa,
			fecha: req.body.fecha, 
			nrofactura: req.body.nroFactura,
			total: req.body.total, 
		},
		function(err, factura) {
			if (err) {
				console.log("##=> Error guardando factura: %o", err);
				res.send(err);
			}
			// Consulta y devuelve todas las facturas, luego de crear una nueva factura
			getFactura (req, res);
		}
	);
}

//Modificar una factura en base de datos
function updateFactura(req, res){
	factura.update( 
		{_id : req.params.factura_id},
		{ $set:
			{
				empresa : req.body.empresa,
				fecha: req.body.fecha, 
				nrofactura: req.body.nroFactura,
				total: req.body.total, 
			}
		},
		function(err, factura) {
			if (err) {
				console.log("##=> Error modificando factura: %o", err);
				res.send(err);
			}
			// Consulta y devuelve todas las facturas, luego de modificar una factura
			getFactura (req, res);
		}
	);
};

// Elimino un factura de la base de datos
function removeFactura(req, res) {
	Factura.remove(
		{_id : req.params.factura_id}, 
		function(err, factura) {
			if (err) {
				console.log("##=> Error borrando factura: %o", err);
				res.send(err);
			}
			// Consulta y devuelve todas las facturas, luego de borrar una factura
			getFactura (req, res);
		}
	);
}

module.exports = {
	getFactura,
	setFactura,
	updateFactura,
	removeFactura
}
