angular.module("alurapic").controller("FotosController", function($scope, $http) {
	$scope.init = function() {
		$scope.obterFotos();
		$scope.filtro = '';
		$scope.mensagem = '';		
	};

	$scope.obterFotos = function() {
		$http.get('/v1/fotos')
			.success(function(fotos) {
				$scope.fotos = fotos;
			}).error( function(erro) {
				console.log(erro);
			});
	};

	$scope.remove = function(foto) {
		$http.delete('/v1/fotos/' + foto._id)
			.success(function() {
				$scope.mensagem = 'foto '+foto.titulo+' removida com sucesso';
				var indice = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indice, 1);
			}).error(function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível remover a foto '+foto.titulo;
			});
	};

	$scope.init();
});