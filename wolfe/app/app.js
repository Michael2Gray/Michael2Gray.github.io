(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe', [
		// External Dependencies
		'slickCarousel',
		'angular-parallax',
		'ngAnimate',
		'ui.bootstrap',
		'ngRoute',

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
		// $rootScope.$on('initialised', function(event, element) {
		// 	element.removeClass('splash-screen');
		// });

		// save a reference to the previous state
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$state.previous = fromState;
			$state.previousParams = fromParams;
		});
	}])
	.config(function ($routeProvider){
		$routeProvider.
			when('/about', {
				templateUrl: '/app/about/about.tpl.html',
				controller: 'AboutCtrl'
			}).
			when('/brands', {
				templateUrl: '/app/brands/brands.tpl.html',
				controller: 'BrandsCtrl'
			}).
			when('/contact', {
				templateUrl: '/app/contact/contact.tpl.html',
				controller: 'ContactCtrl'
			}).
			when('/cycle-to-work', {
				templateUrl: '/app/cycleToWork/cycleToWork.tpl.html',
				controller: 'CycleToWorkCtrl'
			}).
			when('/home', {
				templateUrl: '/app/home/home.tpl.html',
				controller: 'HomeCtrl'
			}).
			when('/services', {
				templateUrl: '/app/services/services.tpl.html',
				controller: 'ServicesCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	})
	;
})(window, window.$, window.angular);