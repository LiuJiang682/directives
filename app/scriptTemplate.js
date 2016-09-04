(function(angular) {
	'use strict';
angular.module('docsSimpleDirective', [])
//	.controller('Controller', ['$scope', function($scope) {
//		$scope.customer={
//				name: 'Naomi',
//				address: '1600 Amphitheatre'
//		};
//	}])

//	.controller('NaomiController', ['$scope', function($scope) {
//		$scope.customer = {
//			    name: 'Naomi',
//			    address: '1600 Amphitheatre'
//			  };
//	}])
//	.controller('IgorController', ['$scope', function($scope) {
//		$scope.customer = {
//			    name: 'Igor',
//			    address: '123 Somewhere'
//			  };
//	}])
	.controller('Controller', ['$scope', function($scope) {
		$scope.naomi = { name : 'Naomi', address: '1600 Amphitheatre'};
//		$scope.igor = { name : 'Igor', address: '123 Somewhere'}
		$scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
	}])
	.directive('myCustomer', function() {
		return {
//			template: 'Name: {{customer.name}} Address: {{customer.address}}'

//			templateUrl: 'my-customer.html'

//			templateUrl: function(elem, attr) {
//				return 'customer-' + attr.type + '.html';
//			}
			
//			restrict: 'E',
//			templateUrl: 'my-customer.html'
			
			restrict: 'E',
			scope: {
				customerInfo: '=info'
			},
//			templateUrl: 'my-customer-iso.html'
			templateUrl: 'my-customer-plus-vojta.html'
		};
	});
})(window.angular);
