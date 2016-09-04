describe('test provider', function() {
	var anotherProviderObj, appConstantsObj, sampleProviderObj;
	
	beforeEach(function() {
		module(function($provide) {
			var another = function() {
				this.register = jasmine.createSpy('register');
				this.$get = function() {};
			};
			
			$provide.provider('another', another);
			$provide.constant('appConstants', {
				ALLOW: 1,
				DENY: 0
			});
		});
	});
	
	beforeEach(module('providers'));
	
	beforeEach(function(){
	    module(function(anotherProvider, appConstants, sampleProvider){
	      anotherProviderObj=anotherProvider;
	      appConstantsObj=appConstants;
	      sampleProviderObj=sampleProvider;
	    });
	  });

	beforeEach(inject());
	
	it('should be call register with Allow', function() {
		expect(anotherProviderObj.register).toBeDefined();
		sampleProviderObj.configureOptions({allow:true});
	    expect(anotherProviderObj.register).toHaveBeenCalled();
	    expect(anotherProviderObj.register).toHaveBeenCalledWith(appConstantsObj.ALLOW);
	});
	
	it('should be call register with Deny', function() {
		expect(anotherProviderObj.register).toBeDefined();
		sampleProviderObj.configureOptions({allow:false});
	    expect(anotherProviderObj.register).toHaveBeenCalled();
	    expect(anotherProviderObj.register).toHaveBeenCalledWith(appConstantsObj.DENY);
	});
});
