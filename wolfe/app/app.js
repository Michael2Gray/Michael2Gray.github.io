(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe', [
		// External Dependencies
		'ui.router',
		'slickCarousel',
		'angular-parallax',
		'ngAnimate',
		'ui.bootstrap',
		'ngRoute',
		'ezfb',

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
	.config(function ($routeProvider, ezfbProvider){
		$routeProvider.
			when('/about', {
				templateUrl: '/wolfe/app/about/about.tpl.html',
				controller: 'AboutCtrl'
			}).
			when('/brands', {
				templateUrl: '/wolfe/app/brands/brands.tpl.html',
				controller: 'BrandsCtrl'
			}).
			when('/contact', {
				templateUrl: '/wolfe/app/contact/contact.tpl.html',
				controller: 'ContactCtrl'
			}).
			when('/cycle-to-work', {
				templateUrl: '/wolfe/app/cycleToWork/cycleToWork.tpl.html',
				controller: 'CycleToWorkCtrl'
			}).
			when('/home', {
				templateUrl: '/wolfe/app/home/home.tpl.html',
				controller: 'HomeCtrl'
			}).
			when('/services', {
				templateUrl: '/wolfe/app/services/services.tpl.html',
				controller: 'ServicesCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});

		ezfbProvider.setInitParams({
			appId      : '179829562386996',
      		xfbml      : true,
      		version    : 'v2.5'
		});
	})
	;
})(window, window.$, window.angular);