describe('greet test', function() {
	beforeEach(
		module('greetMod', function($provide) {
			$provide.value('$window', {
				alert: jasmine.createSpy('alert')
			});
		}));
	
	it('should alert on window', inject(function(alert, $window) {
		var message = 'Hello world';
		alert(message);
		expect($window.alert).toHaveBeenCalledWith(message);
	}));
	
	it('should call alert factory', function() {
		var alertSpy = jasmine.createSpy('alert');
		module(function($provide) {
			$provide.value('alert', alertSpy);
		});
		inject(function(greet) {
			greet('Paul');
			expect(alertSpy).toHaveBeenCalledWith('Good morning! Paul!');
		});
		
	});
});

//describe('myApp', function() {
//	  // load application module (`greetMod`) then load a special
//	  // test module which overrides `$window` with a mock version,
//	  // so that calling `window.alert()` will not block the test
//	  // runner with a real alert box.
//	  beforeEach(module('greetMod', function($provide) {
//	    $provide.value('$window', {
//	      alert: jasmine.createSpy('alert')
//	    });
//	  }));
//
//	  // inject() will create the injector and inject the `greet` and
//	  // `$window` into the tests.
//	  it('should alert on $window', inject(function(alert, $window) {
//	    greet('World');
//	    expect($window.alert).toHaveBeenCalledWith('Hello World!');
//	  }));
//
//	  // this is another way of overriding configuration in the
//	  // tests using inline `module` and `inject` methods.
//	  it('should alert using the alert service', function() {
//	    var alertSpy = jasmine.createSpy('alert');
//	    module(function($provide) {
//	      $provide.value('alert', alertSpy);
//	    });
//	    inject(function(greet) {
//	      greet('World');
//	      expect(alertSpy).toHaveBeenCalledWith('Hello World!');
//	    });
//	  });
//	});