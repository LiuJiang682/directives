(function(angular) {
angular.module('demo', [])

.controller('DemoController', function($scope) {
    $scope.rating = 42;     
    $scope.minRating = 45;
    $scope.maxRating = 50;
})

.directive('rnStepper', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {
           min: '=',
           max: '='
        },
//        template: '<button ng-click="decrement()">-</button>' +
//                  '<div>{{ value }}</div>' +
//                  '<button ng-click="increment()">+</button>',
        templateUrl: 'myButt.html',
        link: function(scope, iElement, iAttrs, ngModelController) {
            // we can now use our ngModelController builtin methods
            // that do the heavy-lifting for us

            // when model change, update our view (just update the div content)
            ngModelController.$render = function() {
//                iElement.find('div').text(ngModelController.$viewValue);
            	var myE1 = angular.element(document.querySelector('#value1'));
            	if (myE1) {
            		myE1.text(ngModelController.$viewValue);
            	}
            };
            
            function checkValidity() {
                // check if min/max defined to check validity
                var isOverMin = (angular.isDefined(scope.min) && ngModelController.$viewValue < parseInt(scope.min, 10)),
                    isOverMax = (angular.isDefined(scope.max) && ngModelController.$viewValue > parseInt(scope.max, 10)),
                    valid = !(isOverMin || isOverMax);
                // set our model validity
                // the outOfBounds is an arbitrary key for the error.
                // will be used to generate the CSS class names for the errors
                ngModelController.$setValidity('outOfBounds', valid);
                
            } 

            // update the model then the view
            function updateModel(offset) {
                // call $parsers pipeline then update $modelValue
                ngModelController.$setViewValue(ngModelController.$viewValue + offset);
                // update the local view
                ngModelController.$render();
                // check validity
                checkValidity();
            }

            // update the value when user clicks the buttons
            scope.decrement = function() {
                updateModel(-1);
            };
            scope.increment = function() {
                updateModel(+1);
            };
            // check validity on start, in case we're directly out of bounds
            checkValidity();
            // watch out min/max and recheck validity if they change
            scope.$watch('min+max', function() {
                checkValidity();                
            });
            scope.isOverMin = function() {
            	return (angular.isDefined(scope.min) && ngModelController.$viewValue < parseInt(scope.min, 10));
            }
            scope.isOverMax = function() {
            	return (angular.isDefined(scope.max) && ngModelController.$viewValue > parseInt(scope.max, 10));
            }
//            scope.$watch('bsb', function() {
//            	console.log(scope.bsb);
//            	if (scope.bsb) {
//            		if (3 <= scope.bsb.length) {
//                		scope.bsb = scope.bsb.substr(0, 3);
//                	}
//            	}
//            });
            
//            var mybsb = angular.element(document.querySelector('#bsb'));
//            if (mybsb) {
//            	mybsb.on('keydown', function(e) {
//            		var keyCode = e.keyCode || e.keywhich;
//            		console.log(keyCode);
//            		var text = mybsb.val();
//            		console.log(text);
//            		if (3 <= text.length) {
//            			e.preventDefault();
//            		}
//            	});
//            }
            scope.isOverMaxLen = function() {
//            	var text = ngModelController.$viewValue;
            	var mybsb = angular.element(document.querySelector('#bsb'));
            	if (mybsb) {
            		var text = mybsb.val();
            		if (3 <= text.length) {
                		return true;
                	}
            	}
            	
            	return false;
            }
        }
    };
});
})(window.angular);