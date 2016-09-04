(function(angular) {
  'use strict';
angular.module('myModule', [])
.controller('myController', function($scope) {
	console.log("inside controller");
})
.directive('bsb', function(){
    return {
//        restrict: "A",
    	replace: true,
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        	console.log("inside link");
            function fromUser(text) {
                if (!text)
                    return text;

                if (text.length > 3) {
                	var correctText = text.substr(0, 3);
                	ngModelCtrl.$setViewValue(correctText);
                    ngModelCtrl.$render();
                    return correctText;
                }
                return text;
            }
            ngModelCtrl.$parsers.push(fromUser);
        },
//        templateUrl: 'bsb.html'
        template: '<input type="text" ng-model="inputValue" placeholder="your BSB"/>'
    }
});
})(window.angular);
