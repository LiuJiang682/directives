describe('service tests', function(){
	var mockMyHttpSvc, ajaxSvcObject;
	
	beforeEach(function(){
	    module(function($provide){
	    	$provide.service('myHttpSvc', function(){
	            this.get = jasmine.createSpy('get');
//	            this.get(123, function() {
//	            	return true;
//	            });
	          });
//	    	$provide.factory('myHttpSvc', function() {
//	    		
//	    	});
	    });
//		spyOn(mockMyHttpSvc, 'get').andReturn('true');
	    
	    module('aservices');
	});
	
	beforeEach(inject(function(myHttpSvc, ajaxSvc){
	    mockMyHttpSvc=myHttpSvc;
	    ajaxSvcObject=ajaxSvc;
	}));
	
	it('It should return empty string', function() {
		var returnValue = ajaxSvcObject.myGet();
		
		expect(returnValue).toEqual("");
	});
	
	it('shoudl pass the id to get', function() {
		var id = 123;
		var result = ajaxSvcObject.myGet(id);
		
		expect(result).not.toEqual("");
		expect(mockMyHttpSvc.get).toHaveBeenCalled();
		expect(mockMyHttpSvc.get).toHaveBeenCalledWith(id);
	});
});