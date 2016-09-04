'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('docsBindExample', function() {
	it('should show off bindings', function() {
//		var containerElm = element(by.css('div[ng-controller="Controller"]'));
		var containerElm = element(by.css('div[id="myController"]'));
//		var containerElm = element(by.id('myController'));
//		browser.wait(function() {
//			containerElm.isPresent();},
//			10000, "Element NOT found");
		var nameBindings = containerElm.all(by.binding('name'));

		expect(nameBindings.count()).toBe(5);
		nameBindings.each(function(elem) {
			expect(elem.getText()).toEqual('Jiang Liu');
		});
	});
});