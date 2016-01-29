(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.contact', [
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('contact', {
			abstract: true,
			url: '',
			template: '<div ui-view/>'
		})
		.state('contact.page', {
			url: '/contact',
			templateUrl: 'app/contact/contact.tpl.html',
			controller: 'ContactCtrl'
		});
		// add the trailing slash if it's missing
		$urlRouterProvider.when('/contact', '/contact/');
	}])
	.run(['$rootScope', '$state', function($rootScope, $state) {
	}])

	;
})(window, window.$, window.angular);