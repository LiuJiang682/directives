(function(angular) {
angular.module('bankDetails', [])

.controller('bankDetailsController', function($scope) {
//    $scope.bsb = 123;     
//    $scope.min = 0;
//    $scope.max = 3;
//    $scope.bankDetails = {
//    	bsb: '',
//    	accountNumber: ''
//    };
})

.directive('myBankdetails', function() {
    return {
//        restrict: 'AE',
        require: 'ngModel',
//        scope: {
//           min: '=',
//           max: '=',
//           bankDetails: '=?bind'
//        },

        templateUrl: 'my-bankDetailsInput.html',
        link: function(scope, iElement, iAttrs, ngModelController) {
        	var pattern = /[^0-9]*/g;
            function fromUser(text) {
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                	ngModelController.$setViewValue(transformedInput);
                	ngModelController.$render();
                }
                return transformedInput;
            }
            ngModelController.$parsers.push(fromUser);
//        	console.log(ngModelController.$viewValue);
//        	var bsbmax = parseInt(iAttrs.bsbmax, 10);
//        	if (!bsbmax) {
//        		bsbmax = 3;
//        	}
//        	
//        	var accountNumberMax = parseInt(iAttrs.accountnumbermax, 10);
//        	if (!accountNumberMax) {
//        		accountNumberMax = 8;
//        	}
        	
//          scope.$watch('bankDetails.bsb', function() {
//        	console.log(scope.bankDetails.bsb);
//        	if (scope.bankDetails.bsb) {
//        		if (bsbmax <= scope.bankDetails.bsb.length) {
//            		scope.bankDetails.bsb = scope.bankDetails.bsb.substr(0, bsbmax);
//            	}
//        	}
//        	ngModelController.$setViewValue(scope.bankDetails);
//          });
//          scope.$watch('bankDetails.accountNumber', function() {
//        	  console.log(scope.bankDetails.accountNumber);
//        	  if (scope.bankDetails.accountNumber) {
//        		  if (accountNumberMax <= scope.bankDetails.accountNumber.length) {
//        			  scope.bankDetails.accountNumber = scope.bankDetails.accountNumber.substr(0, accountNumberMax);
//        		  }
//        	  }
//        	  ngModelController.$setViewValue(scope.bankDetails);
//          });
          
//        	function limitedLength(str, max) {
//        		if (str) {
//        			if (max <= str.length) {
//        				str = str.substr(0, max);
//        			}
//        		}
//        		return str;
//        	}
        	
//          var pattern = /[^0-9]*/g;
//          function fromUser(text) {
//        	  if (!text)
//        		  return text;
//        	  
//        	  var transformedInput;
//        	  if (text.bsb) {
//        		  transformedInput = text.bsb.replace(pattern, '');
//        		  if (transformedInput !== text.bsb) {
//        			  scope.bankDetails.bsb = limitedLength(transformedInput, bsbmax);
//        			  ngModelController.$setViewValue(scope.bankDetails);
//            		  ngModelController.$render();
//        		  }
//        	  }
//        	  
//        	  if (text.accountNumber) {
//        		  transformedInput = text.accountNumber.replace(pattern, '');
//            	  if (transformedInput !== text.accountNumber) {
//            		  scope.bankDetails.accountNumber = transformedInput;
//            		  ngModelController.$setViewValue(scope.bankDetails);
//            		  ngModelController.$render();
//            	  }  
//        	  }
//        	  
//        	  return transformedInput;
//          }
//          ngModelController.$parsers.push(fromUser);
          // This one do not work
//          var inputs = angular.element(document.body.querySelectorAll('input[ng-model]', iElement));
//          if ((inputs) && (2 == inputs.length)) {
//        	  var accountNumberInput = inputs[1];
//        	  console.log(accountNumberInput);
//        	  accountNumberInput.on('keydown', function() {
//        		  console.log(accountNumberInput.val());
//        	  });
//          }
          
          // This one work
//          var accountNumberInput = angular.element(document.querySelector('#accountNumber'));
//          if (accountNumberInput) {
//        	  accountNumberInput.on('keydown', function(e) {
//        		  console.log(accountNumberInput.val());
//        	  });
//          }
        }
    };
});
})(window.angular);
