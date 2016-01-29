(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.cycleToWork', [
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('cycleToWork', {
			abstract: true,
			url: '',
			template: '<div ui-view/>'
		})
		.state('cycleToWork.page', {
			url: '/cycleToWork',
			templateUrl: 'app/cycleToWork/cycleToWork.tpl.html',
			controller: 'CycleToWorkCtrl'
		});
		// add the trailing slash if it's missing
		$urlRouterProvider.when('/cycleToWork', '/cycleToWork/');
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {
	}])

	;
})(window, window.$, window.angular);