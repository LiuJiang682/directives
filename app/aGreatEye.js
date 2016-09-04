(function(angular) {
	angular.module('myApp', [])
	
	.directive('aGreatEye', function() {
		return {
			restrict: 'E',
		replace: true,
		template: '<h1>lidless, wreathed in flame, {{ 1+ 1 }} times</h1>'
//		template: '<input type="text" ng-model="inputValue" />'
//			template: '<button>Increment value!</button>'
	}
	});
})(window.angular);
//var app = angular.module('myApp', []);
//
//app.directive('aGreatEye', function() {
//	return {
//		restrict: 'E',
//		replace: true,
////		template: '<h1>lidless, wreathed in flame, {{ 1+ 1 }} times</h1>'
//		template: '<input type="text" ng-model="inputValue" />'
//	};
//});