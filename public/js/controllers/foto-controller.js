angular.module("alurapic").controller("FotoController", function($scope, $http) {
	$scope.foto = {};
	$scope.submeter = function() {
		console.log($scope.foto);
		$http.post('/v1/fotos', $scope.foto)
			.success(function(){
				console.log('gravou');
				$scope.foto = {};
			}).error(function(){
				console.log('deu ruim');
			});
	};
});