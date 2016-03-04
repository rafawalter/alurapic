angular.module("alurapic")
	.controller("FotoController", function(cadastroDeFotos, recursoFoto, $scope, $http, $routeParams, $location) {

		if ($routeParams.id) {
			recursoFoto.get({fotoId: $routeParams.id}, function(foto) {
				$scope.foto = foto;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto '+$routeParams.id;
			});
		};

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				cadastroDeFotos.cadastra($scope.foto)
					.then(function(retorno){
						$scope.mensagem = retorno.mensagem;
						if (retorno.inclusao) {
							$scope.foto = {};							
						} else {
							$location.path('/');
						};
					}).catch(function(retorno){
						$scope.mensagem = retorno.mensagem;
					});
			};
		};
		$scope.foto = {};
		$scope.mensagem = '';

	});