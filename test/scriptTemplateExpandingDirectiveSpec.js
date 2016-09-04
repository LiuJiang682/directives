describe('Template expand directive', function() {
	var compile, scope, directiveElem;
	
	beforeEach(function () {
        angular.module('docsSimpleDirective', [])
            .directive('myCustomer', function(){
                return function(scope, elem){
                    elem.append('<span>This span is appended from directive.</span>');
                    elem.append('<H3>This H3 is appended from directive.</H3>');
                };
            });
    });
	
	beforeEach(function() {
        module('docsSimpleDirective');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div myCustomer></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }
    
	it('should show off template expand', function() {
		expect(directiveElem).toBeDefined();
		console.log("directiveElem " + directiveElem.text());
//		for (var attr in directiveElem) {
//        	console.log(attr);
//        }
		var containerElm = directiveElem.find('div');
		console.log("containerElm");
//		console.log(containerElm.html());
//		for (var attr in containerElm) {
//			var value = containerElm[attr];
//			console.log(attr + " " + value);
//		}
		expect(containerElm).toBeDefined();
//		expect(containerElm.text()).toEqual('Name: Naomi Address: 1600 Amphitheatre');
	});
});
