angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newFactura = {};
	$scope.facturas = {};
	$scope.selected = false;

	// Obtener facturas de base de datos
	$http.get('/api/factura')
		.success(function(data) {
			console.log("Consulta BD - core.js -- /api/factura: ", data);
			$scope.facturas = data;
		})
		.error(function(data, status, headers, config) {
			console.log('##=> Error core - data: %o', data);
			console.log('##=> Error core - status: %o', status);
			console.log('##=> Error core - headers: %o', headers);
			console.log('##=> Error core - config: %o', config);
	});

	// Registrar una factura
	$scope.registrarFactura = function() {
		$http.post('/api/factura', $scope.newFactura)
		.success(function(data) {
			$scope.newFactura = {}; // Borramos los datos del formulario
			$scope.facturas = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	};

	// Modificar una factura
	$scope.modificarFactura = function() {
		$http.put('/api/factura/' + $scope.newFactura._id, $scope.newFactura)
		.success(function(data) {
			$scope.newFactura = {}; // Borramos los datos del formulario
			$scope.facturas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Eliminar una factura por su identificador
	$scope.borrarFactura = function() {
		$http.delete('/api/factura/' + $scope.newFactura._id)
		.success(function(data) {
			$scope.newFactura = {};
			$scope.facturas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Seleccionar factura de la vista (tabla)
	$scope.selectFactura = function(factura) {
		$scope.newFactura = angular.copy(factura);
		$scope.selected = true;
		console.log("Factura seleccionada: ", $scope.newFactura );
	};

}
