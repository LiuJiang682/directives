(function(angular) {
  'use strict';
angular.module('docsIsoFnBindExample', [])
  .controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Helen';
    $scope.message = '';
    $scope.hideDialog = function (message) {
      $scope.message = message;
      $scope.dialogIsHidden = true;
      $timeout(function () {
        $scope.message = '';
        $scope.dialogIsHidden = false;
      }, 2000);
    };
    $scope.$watch('input', function(e) {
    	console.log($scope.input);
    });
  }])
  .directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClose'
      },
      link: function (scope, elem, attrs) {
    	  console.log(scope);
    	  console.log(elem);
    	  console.log(attrs);
    	  
    	  var input = elem.find("input");
    	  if (input) {
    		  var maxLen = input.attr('ng-maxlength');
    		  console.log(maxLen);
    		  if (!angular.isNumber(maxLen)) {
    			  maxLen = 3;
    		  }
    		input.bind('keydown', function(e) {
    			var content = input.val();
    			console.log(content);
    			if (maxLen <= content.length) {
    				e.preventDefault();
    			}
    		});  
    	  };
//    	  elem.on('keydown', function(e) {
//    		  var input = elem.find("input");
//    		  if (input) {
//    			  console.log(input.text());
//    		  }
//    	  });
      },
      templateUrl: 'myInput.html'
    };
  });
})(window.angular);