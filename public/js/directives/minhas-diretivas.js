angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {
		var ddo = {};
		ddo.transclude = true;
		ddo.restrict = "AE";
		ddo.templateUrl = "js/directives/meu-painel.html";
		ddo.scope = {
			titulo: "@"
		};
		return ddo;
	})
	.directive('meuErro', function() {
		return {
			transclude: true,
			restrict: "AE",
			templateUrl: "js/directives/meu-erro.html",
			scope: {
				mensagem: "@",
				exibir: '@',
			},
		};
	})
	.directive('minhaFoto', function() {
		return {
			restrict: "E",
			template: '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">',
			scope: {
				titulo: '@',
				url: '@'
			},
		};
	})
	.directive('botaoPerigo', function() {
		var ddo = {};
		ddo.restrict = 'E';
		ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao">{{nome}}</button>';
		ddo.scope = {
			nome: '@',
			acao: '&',
		};
		return ddo;
	});
