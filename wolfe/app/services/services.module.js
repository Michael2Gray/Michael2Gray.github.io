(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.services', [
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('services', {
			abstract: true,
			url: '',
			template: '<div ui-view/>'
		})
		.state('services.page', {
			url: '/services',
			templateUrl: 'app/services/services.tpl.html',
			controller: 'ServicesCtrl'
		});
		// add the trailing slash if it's missing
		$urlRouterProvider.when('/services', '/services/');
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {
	}])

	;
})(window, window.$, window.angular);