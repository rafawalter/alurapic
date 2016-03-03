angular.module("alurapic").controller("FotosController", function($scope, $resource) {
	$scope.init = function() {
		$scope.obterFotos();
		$scope.filtro = '';
		$scope.mensagem = '';		
		$scope.fotos = [];
	};


	var recursoFoto = $resource('/v1/fotos/:fotoId');
	$scope.obterFotos = function() {
		recursoFoto.query(function(fotos) {
			$scope.fotos = fotos;
		}, function(erro) {
			console.log(erro);
		});
	};

	$scope.remove = function(foto) {
		recursoFoto.delete({fotoId : foto._id}, function() {
			$scope.mensagem = 'foto '+foto.titulo+' removida com sucesso';
			var indice = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indice, 1);
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto '+foto.titulo;

		});
	};
/*
	$scope.obterFotos = function() {
		$http.get('/v1/fotos')
			.success(function(fotos) {
				$scope.fotos = fotos;
			}).error( function(erro) {
				console.log(erro);
			});
	};
*/

/*
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
*/
	$scope.init();
});