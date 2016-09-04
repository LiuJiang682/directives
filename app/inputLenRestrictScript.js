(function(angular) {
angular.module('inputLenStrictDemo', [])

.controller('inputLenStrictDemoController', function($scope) {
//    $scope.bsb = 123;     
    $scope.min = 0;
    $scope.max = 3;
    $scope.accountNumber = 123456;
})

.directive('myInputlenstrictor', function() {
    return {
//        restrict: 'AE',
        require: 'ngModel',
        scope: {
           min: '=',
           max: '=',
           bsb: '=?bind',
           accountNumber: '=?bind'
        },

        templateUrl: 'my-input.html',
        link: function(scope, iElement, iAttrs, ngModelController) {
        	console.log(ngModelController.$viewValue);
        	var max = parseInt(iAttrs.max, 10);
        	if (!max) {
        		max = 3;
        	}
        	
          scope.$watch('bsb', function() {
        	console.log(scope.bsb);
        	if (scope.bsb) {
        		if (max <= scope.bsb.length) {
            		scope.bsb = scope.bsb.substr(0, max);
            	}
        	}
        	ngModelController.$setViewValue(scope.bsb);
          });
        }
    };
});
})(window.angular);
