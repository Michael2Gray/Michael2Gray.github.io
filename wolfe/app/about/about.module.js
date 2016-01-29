(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.about', [
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('about', {
			abstract: true,
			url: '',
			template: '<div ui-view/>'
		})
		.state('about.page', {
			url: '/about',
			templateUrl: 'app/about/about.tpl.html',
			controller: 'AboutCtrl'
		});
		// add the trailing slash if it's missing
		$urlRouterProvider.when('/about', '/about/');
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {
	}])

	;
})(window, window.$, window.angular);