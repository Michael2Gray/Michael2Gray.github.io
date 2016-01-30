(function(window, $, angular, undefined) {
	'use strict';
	angular.module('wolfe.home')

	.controller('HomeCtrl', ['$scope', function ($scope) {
		/**
		* PRIVATE VARIABLES
		*/
		var setup = function() {
				$scope.preloadImages();
				$scope.imagesLoaded = true;
			};		

		/**
		* SCOPE VARIABLES
		*/
		$scope.imagesLoaded = false;

		$scope.slickConfig =  {
			infinite: true,
    		slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3500,
    		draggable: false,
    		adaptiveHeight: true,
    		arrows: false,
    		dots: true,
    		fade: true
		};

		/**
		* SCOPE METHODS
		*/
		$scope.preloadImages = function() {
			$scope.slideImages = [
				{
					'title': 'BH Road Bikes',
					'src': 'build/images/Wolfe-Cycles-BH-Bike-Dark.jpg',
					'link': '/brands',
					'linkText': 'In Store Now'
				}, {
					'title': 'All Your Accessory Needs',
					'src': 'build/images/Wolfe-Cycles-Accessories.jpg',
					'link': '/contact',
					'linkText': 'Need a Service?'
				}, {
					'title': 'Located in the Heart of Kimmage',
					'src': 'build/images/Wolfe-Cycles-Dublin-Shop.JPG',
					'link': '/contact',
					'linkText': 'Visit Us Today'
				}
			];
		}

		setup();
	}])
	;
})(window, window.$, window.angular);