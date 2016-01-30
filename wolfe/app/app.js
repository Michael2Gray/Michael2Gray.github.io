(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe', [
		// External Dependencies
		'ui.router',
		'slickCarousel',
		'angular-parallax',

		//Internal Dependencies
		'wolfe.navigation',

		//ACTUAL PAGES
		'wolfe.home',
		'wolfe.about',
		'wolfe.brands',
		'wolfe.contact',
		'wolfe.cycleToWork',
		'wolfe.services' 
	])
	.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		//removes the splash screen
		$rootScope.$on('initialised', function(event, element) {
			element.removeClass('splash-screen');
		});

		// save a reference to the previous state
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$state.previous = fromState;
			$state.previousParams = fromParams;
		});
	}])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.when('', '/home');
		$urlRouterProvider.otherwise('/404');

	}])
})(window, window.$, window.angular);