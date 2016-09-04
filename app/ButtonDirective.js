(function(angular) {
	angular.module('thirdDirectiveApp', [])
	.directive('thirdDirective', function() {
		return {
			template: '<button>Increment fff value!</button>',
			link: function (scope, elem) { console.log("inside linke function!");
				elem.find('button').on('click', function() { console.log("inside click " + scope.value);
					scope.value++;
				});
			}
		}
	});
})(window.angular);
