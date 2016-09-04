(function(angular) {
	'use strict';
angular.module('docsTransclusionDirective', [])
//	.controller('Controller', ['$scope', function($scope) {
//		$scope.name = 'Helen'
//	}])

	.controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
		$scope.name = 'Helen';
		$scope.message = '';
		$scope.hideDialog = function (message) {
			$scope.message = message;
			$scope.dialogIsHidden = true;
			$timeout(function() {
				$scope.message = '';
//				$scope.dialogIsHidden = true;
				$scope.dialogIsHidden = false;
			}, 2000);
		};
	}])
	.directive('myDialog', function() {
		return {
			restrict: 'E',
			transclude: true,
//			scope: {},
			scope: {
				'close' : '&onClose'
			},
//			templateUrl: 'my-dialog.html',
//			link: function (scope) {
//				scope.name = 'Amy';
//			}
			templateUrl: 'my-dialog.html'
		};
	});
})(window.angular);
