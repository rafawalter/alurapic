angular.module("alurapic").controller("FotosController", function($scope, recursoFoto) {
	$scope.init = function() {
		$scope.obterFotos();
		$scope.filtro = '';
		$scope.mensagem = '';		
		$scope.fotos = [];
	};

	
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

	$scope.init();
});