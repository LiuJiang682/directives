(function(angular) {
	angular.module('bankDetailsf', [])
	
	.controller('bankDetailsControllerf', function($scope) {
		
	})

	.directive('inputRestrictor', function() {
		return {
	        restrict: 'A',
	        require: 'ngModel',
	        priority: 1000,
//	        scope: {
//	        	bankDetailsf: '=?bind'
//	        },
//	        templateUrl: 'my-bankDetailsInput.html',
//	        template: 'BSB: <input id="bsb" type="text" ng-model="bsb"/>',
//	        template: 'BSB: <input id="bsb" type="text" ng-model="bankDetails.bsb"/>' +
//	        		  '</br>' +
//	        		  'Account Number: <input id="accountNumber" type="text" ng-model="bankDetails.accountNumber" />',
	        link: function (scope, element, attr, ngModelCtrl) {
//	            scope.$watch('bankDetailsf.bsb', function() {
//	            	console.log(scope.bankDetailsf.bsb);
//	            	ngModelCtrl.$setViewValue(scope.bankDetailsf.bsb);
//	            	ngModelCtrl.$render();
//	            });
	            
//	        	var pattern = /[^0-9]*/g;
	        	var patternStr = attr.permittedchars; 
	        	var pattern;
	        	if (patternStr) {
	        		patternStr = '[^' + patternStr + ']*';
	        		pattern = new RegExp(patternStr, 'g');
                }
	        	
	            function fromUser(text) {
	                if (!text)
	                    return text;

	                if (pattern) {
	                	var transformedInput = text.replace(pattern, '');
		                if (transformedInput !== text) {
		                    ngModelCtrl.$setViewValue(transformedInput);
		                    ngModelCtrl.$render();
		                }
	                }
	                
	                return transformedInput;
	            }
	            ngModelCtrl.$parsers.push(fromUser);
	        }
	    };
	})
	.directive('inputLimitedlength', function() {
		return {
	        restrict: 'A',
	        require: 'ngModel',
	        priority: 1002,
	        link: function (scope, element, attr, ngModelCtrl) {
	        	var max = parseInt(attr.max, 10);
	        	
	        	function fromUser(text) {
	                if (!text)
	                    return text;

	                var transformedInput = text;
	                if ((max) && (max <= transformedInput.length)) {
	                	transformedInput = transformedInput.substr(0, max);
	                	ngModelCtrl.$setViewValue(transformedInput);
	                    ngModelCtrl.$render();
	                }
	                return transformedInput;
	            }
	            ngModelCtrl.$parsers.push(fromUser);
	        }
		};
	});
})(window.angular);

