(function(angular) {
  'use strict';
angular.module('myModule', [])
.controller('Controller', ['$scope', function($scope) {
	$scope.monitorLength = function (maxLength) {
		  if ($scope.value.length > maxLength) {
		    $scope.value = $scope.value.substring(0, maxLength);
		  }
		}
}]);
})(window.angular);
