(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.home', [
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			abstract: true,
			url: '',
			template: '<div ui-view/>'
		})
		.state('home.page', {
			url: '/home',
			templateUrl: 'app/home/home.tpl.html',
			controller: 'HomeCtrl'
		});
		// add the trailing slash if it's missing
		$urlRouterProvider.when('/home', '/home/');
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {
	}])

	;
})(window, window.$, window.angular);