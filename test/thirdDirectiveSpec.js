describe('thirdDirective', function() {
	var compile, scope, directiveElem, control;
	
//	beforeEach(module(function($compileProvider) {
//	    $compileProvider.directive('thirdDirectivexxx', function() {
//	      return {
//	        require: 'ngModel',
//	        link: function(scope, elm, attr, ctrl) { 
//	        	console.log("compileProvider " + ctrl);
//	          control = ctrl;
//	        }
//	      };
//	    });
//	  }));
	
//	beforeEach(function () {
//        angular.module('sampleDirectives111', []).directive('thirdDirective', function () {
//            return {
//                template: '<button>Increment value!</button>',
//                link: function (scope, elem) {
//                    elem.find('button').on('click', function(){
//                        scope.value++;
//                    });
//                }
//            };
//        });
//    });
	
	beforeEach(function() {
        module('sampleDirectives111');

        inject(function ($compile, $rootScope) { console.log("inside inject for thirdDirective");
            compile=$compile;
            scope=$rootScope.$new();
           scope.inputValue = {};
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){ console.log("inside compiledElement");
//        var compiledDirective = compile(angular.element('<div third-directive></div>'))(scope);
//var compiledDirective = compile("<third-directive></third-directive>")(scope);
//    	var compiledDirective = compile("<input type="text" ng-model="scope.inputValue" thirdDirectivexxx type="text"></input>")(scope);
//    	var compiledDirective = compile(angular.element('<div third-directivexxx></div>'))(scope);
    var compiledDirective = compile(angular.element('<div><input type="text" ng-model="scope.inputValue" third-directive type="text"></input></div>'))(scope);
    	console.log("before digest: " + compiledDirective);
        scope.$digest();
        console.log("after digest: " + compiledDirective.html());
        return compiledDirective;
    }
    
//    it('should replace element with content', function() {
//    	console.log("directiveElem.html() -- " + directiveElem.html());
//    });
    
    it ('should use input limit', function() { console.log("directiveElem " + directiveElem.html());
    	var input = directiveElem.find('input'); console.log("input " + input);
    	angular.element(input).val('Some text').triggerHandler('input');
    	scope.$apply();
    	control = input.controller('ngModel'); console.log("control " + control);
    	expect(input.val()).toEqual('Som');
    });
    
//    it('should increment value on click of button', function() {
//    	scope.value = 8;
//    	console.log("directiveElem -- " + directiveElem);
//    	var button = directiveElem.find('button');
//    	console.log(button);
//    	button.triggerHandler('click');
//    	scope.$digest();
//    	console.log(button);
//    	expect(scope.value).toEqual(9);
//    });
});
//describe('should replace element with content', function() {
//  var $compile,
//      $rootScope;
//
//  // Load the myApp module, which contains the directive
//  beforeEach(module('sampleDirectives111'));
//
//  // Store references to $rootScope and $compile
//  // so they are available to all tests in this describe block
//  beforeEach(inject(function(_$compile_, _$rootScope_){
//    // The injector unwraps the underscores (_) from around the parameter names when matching
//    $compile = _$compile_;
//    $rootScope = _$rootScope_;
//  }));
//
//  it('Replaces the element with the appropriate content', function() {
//    // Compile a piece of HTML containing the directive
//    var element = $compile("<third-directive></third-directive>")($rootScope);
//    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
//    $rootScope.$digest();
//    
//    console.log(element);
//    var rawElem = element[0];
//    console.log(rawElem);
//    // Check that the compiled element contains the templated content
//    expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
////    expect(element.html()).toContain("");
//  });
//});