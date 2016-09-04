describe('first directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('firstDirectiveApp', [])
            .directive('firstDirective', function(){
                return function(scope, elem){
                    elem.append('<span>This span is appended from directive.</span>');
                    elem.append('<H3>This H3 is appended from directive.</H3>');
                    elem.append('<button>Excuse me!</button>');
                };
            });
    });

    beforeEach(function() {
        module('firstDirectiveApp');

        inject(function ($compile, $rootScope) { console.log("inside inject");
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div first-directive></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
        console.log('found span!');
        
        var h3Element = directiveElem.find('h3');
        expect(h3Element).toBeDefined();
        console.log('h3Element is defined!');
//        for (var h3key in h3Element) {
//        	console.log(h3key);
//        }
        
        console.log("h3Element: " + h3Element);
        expect(h3Element.text()).toEqual('This H3 is appended from directive.');
        
        var button = directiveElem.find('button');
        expect(button).toBeDefined();
//        for (var buttonkey in button) {
//        	console.log(buttonkey);
//        	if ('text' === buttonkey) {
//        		console.log(button.text());
//        	}
//        	if ('html' ===buttonkey) {
//        		console.log(button.html());
//        	}
//        }
        expect(button.text()).toEqual('Excuse me!');
    });
});

