(function(window, $, angular, moment, _, undefined) {
	'use strict';

	angular.module('wolfe.navigation', [
	])
	.controller('NavigationCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

		$scope.showNav = false;

		$scope.toggleNav = function() {
			$scope.showNav = !$scope.showNav;

			console.log($scope.showNav);
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