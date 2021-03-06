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
			autoplaySpeed: 3000,
    		draggable: false,
    		adaptiveHeight: true,
    		arrows: false,
    		dots: true,
    		fade: true,
    		adaptiveHeight: true,
    		focusOnSelect: false,
    		pauseOnHover: false
		};

		/**
		* SCOPE METHODS
		*/
		$scope.preloadImages = function() {
			$scope.slideImages = [
				{
					'title': 'Road Bikes',
					'src': 'build/images/slider/Wolfe-Cycles-BH-Bike-Dark.jpg',
					'link': '#/brands/',
					'linkText': 'In Store Now'
				}, {
					'title': 'All Your Accessory Needs',
					'src': 'build/images/slider/wolfe-cycles-accessories-dark.jpg',
					'link': '#/services/',
					'linkText': 'Need a Service?'
				}, {
					'title': 'Located in the Heart of Kimmage',
					'src': 'build/images/slider/Wolfe-Cycles-Dublin-Shop-Dark.JPG',
					'link': '#/contact/',
					'linkText': 'Visit Us Today'
				}
			];
		}

		setup();
	}])
	;
})(window, window.$, window.angular);