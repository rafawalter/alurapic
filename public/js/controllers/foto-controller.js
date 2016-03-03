angular.module("alurapic")
	.controller("FotoController", function($resource, $scope, $http, $routeParams, $location) {
/*
		if ($routeParams.id) {
			$http.get('/v1/fotos/'+$routeParams.id)
				.success(function(foto) {
					$scope.foto = foto;
				}).error(function(erro){
					console.log(erro);
					$scope.mensagem = 'Não foi possível obter a foto '+$routeParams.id;
				});
		}
*/
		var recursoFoto = $resource('/v1/fotos/:fotoId',null,{
			update: {
				method: 'PUT'
			}
		});
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
				if ($routeParams.id) {
					recursoFoto.update({fotoId:$scope.foto._id}, $scope.foto,function(){
							console.log('alterou');
							$scope.mensagem = 'Foto alterada com sucesso';
							$location.path('/');
						}, function(erro){
							console.log(erro);
							$scope.mensagem = 'Não foi possível alterar a foto '+$routeParams.id;
					});
				} else {
					recursoFoto.save($scope.foto, function(){
							console.log('criou');
							$scope.foto = {};
							$scope.mensagem = 'Foto adicionada com sucesso';
						},function(erro){
							console.log(erro);
							$scope.mensagem = 'Não foi possível criar a foto '+$routeParams.id;
					});	
				};
			};
		};
		$scope.foto = {};
		$scope.mensagem = '';
		/*
		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				console.log($scope.foto);

				if ($routeParams.id) {
					$http.put('/v1/fotos/' + $routeParams.id, $scope.foto)
						.success(function(){
							console.log('alterou');
							$scope.mensagem = 'Foto alterada com sucesso';
							$location.path('/');
						}).error(function(){
							console.log('deu ruim');
							$scope.mensagem = 'Não foi possível alterar a foto '+$routeParams.id;
					});			
				} else {
					$http.post('/v1/fotos/', $scope.foto)
						.success(function(){
							console.log('criou');
							$scope.foto = {};
							$scope.mensagem = 'Foto adicionada com sucesso';
						}).error(function(){
							console.log('deu ruim');
							$scope.mensagem = 'Não foi possível criar a foto '+$routeParams.id;
					});			
				};
			};
		};
		*/
	});