(function(angular) {
  'use strict';
angular.module('myModule', [])
.directive("validateWith", [function(){
    return {
        restrict: "A",
        link: function($scope, $el, $attrs){
//            var regexp = eval($attrs.validateWith);
        	var maxLen = $attrs.validateWith;
        	console.log(maxLen);
            var origVal;
            // store the current value as it was before the change was made
            $el.on("keypress", function(e){
                origVal = $el.val();
                console.log(origVal);
            });

            // after the change is made, validate the new value
            // if invalid, just change it back to the original
            $el.on("keyup", function(e){
//                if(!regexp.test($el.val())){
            	var value = $el.val();
            	console.log(value);
            	if(value.length > maxLen){
                    $el.val(origVal);
                }
            });
        }
    }
}]);
})(window.angular);
