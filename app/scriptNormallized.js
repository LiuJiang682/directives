(function(angular) {
	'use strict';
angular.module('docsBindExample', [])
	.controller('Controller', ['$scope', function($scope) {
		$scope.name = 'Jiang Liu';
	}]);
})(window.angular);