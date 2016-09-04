describe('bsb directive', function() {
	var compile, scope, directiveElem;
	
	beforeEach(module('myModule'));
	
	beforeEach(function() {
		console.log("Before loading myModule");
		module('myModule');
		console.log("After loading myModule");
		inject(function ($compile, $rootScope) { console.log("inside inject");
			compile = $compile; 
//			console.log("after inject, compile is " + compile);
			scope = $rootScope;
		});
		console.log("after inject");
	});
//	beforeEach(inject(function(_$compile, _$rootScope) {
//		compile = _$compile; console.log("after inject, compile is " + compile);
//		scope = _$rootScope;
//	}));
	
	it('Replaces the element with input', function() {
//		console.log("compile is " + compile);
		var e = angular.element('<bsb></bsb>');
		var element = compile(e)(scope);
		scope.$digest();
		console.log(element);
		var rawElem = element[0];
		console.log(rawElem);
		console.log(element.html());
		console.log(element.text());
		console.log(element.contents());
//		expect(element.html()).not.toEqual('');
//		expect(element.find('bsb').length).toEqual(1);
	});
});
