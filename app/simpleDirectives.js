//angular.module('sampleDirectives', [])
//	.directive('thirdDirective', function() {
//		return {
//			template: '<button>Increment value!</button>',
//			link: function (scope, elem) {
//				var button = elem.find('button');
//				console.log(button);
//				if (button) {
//					button.on('click', function() {
//						console.log(scope.value);
//						scope.value++;
//						console.log(scope.value);
//					});
//				}
////				elem.find('button').on('click', function() {
////					scope.value++;
////				});
//			}
//		};
//	});
////			.directive('firstDirective', function() {
////				return function(scope, elem) {
////					elem.append('<span>This span is appended from directive.</span>');
////				}
////			});
(function(angular) {
	angular.module('sampleDirectives111', [])
	
	.directive('thirdDirective', function() {
		return {
//			restrict: 'E',
			require: 'ngModel',
//		replace: true,
//		link: function(scope, elem) {
//			elem.find('button').on('click', function() {
//				scope.value++;
//			});
//		},
		link: function(scope, iElement, iAttrs, ngModelController) {
			console.log("inside link " + ngModelController);
            function fromUser(text) {
            	console.log("inside fromUser " + text);
                if (!text)
                    return text;

                if (text.length > 3) {
                	var correctText = text.substr(0, 3);
                	ngModelController.$setViewValue(correctText);
                	ngModelController.$render();
                    return correctText;
                }
                return text;
            }
            ngModelController.$parsers.push(fromUser);
		},
//		template: '<h1>lidless, wreathed in flame, {{ 1+ 1 }} times</h1>'
		template: '<input type="text" ng-model="inputValue" />'
//			template: '<button>Increment value!</button>'
	}
	});
})(window.angular);
