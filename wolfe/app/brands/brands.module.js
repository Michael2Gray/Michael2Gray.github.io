(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.brands', [
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('brands', {
			abstract: true,
			url: '',
			template: '<div ui-view/>'
		})
		.state('brands.page', {
			url: '/brands',
			templateUrl: 'app/brands/brands.tpl.html',
			controller: 'BrandsCtrl'
		});
		// add the trailing slash if it's missing
		$urlRouterProvider.when('/brands', '/brands/');
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {
	}])

	;
})(window, window.$, window.angular);