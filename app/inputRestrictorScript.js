(function(angular) {
  'use strict';
angular.module('myModule', [])
.directive("inputRestrictor", [function(){
    return {
        restrict: "A",
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            var pattern = /[^0-9A-Z !\\"#$%&'()*+,\-.\/:;<=>?@\[\]^_`{|}~]*/g;
            function fromUser(text) {
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    }
}]);
})(window.angular);
