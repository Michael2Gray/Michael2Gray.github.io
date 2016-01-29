(function(window, $, angular, moment, _, undefined) {
	'use strict';

	angular.module('wolfe.navigation', [
	])
	.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {

		$scope.showNav = false;

		$scope.burgerClick = function() {
			console.log('here');
			$scope.showNav != $scope.showNav;

			return $scope.showNav;
		}

		$scope.isActive = function (path) {
		  	if ($location.path().substr(0, path.length) === path) {
				return 'active';
		  	} else {
		    	return '';
		  	}
		};

	}])
})(window, window.$, window.angular, window.moment, window._);