describe('greetingTest', function() {
	var greetings = [{message:'hello friend'}];
	var $controller, $scope, $httpBackend, $q;
	
	beforeEach(function() {
		module('app');
		
//		inject(function ($injector) {
//			$scope = $injector.get('$rootScope').$new();
//			$controller = $injector.get('$controller');
//			$httpBackend = $injector.get('$httpBackend');
//			$q = $injector.get('$q');
//		});
	});
	beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_, _$q_) {
		$scope = $rootScope.$new();
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;
	}));
	
	it('should load mocked greeting', function() {
//		$httpBackend.whenGET('http://localhost:3000/getGreeting').respond(200, greetings);
		$httpBackend.when('GET', 'http://localhost:3000/getGreeting', undefined, function(headers) {
			return headers.Authorization === 'Basic YmVlcDpib29w';
		})
		.respond(200, greetings);
		$controller('greetingController',{'$scope':$scope});
        $httpBackend.flush(); //needed to resolve and handle promise returned by $http

        expect($scope.greetings).toEqual(greetings);
	});
});

