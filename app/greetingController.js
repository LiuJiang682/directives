(function(angular) {
	angular.module('app', [])
	.controller('greetingController', [
	   '$http',
	   '$scope',
	   function($http, $scope) {
		   $http.defaults.headers.common.Authorization = "Basic YmVlcDpib29w" ;
		   $http.get('http://localhost:3000/getGreeting')
//		 $http.get('http://localhost:3000/getGreeting', {
//			 headers : {'Authorization' : 'Basic YmVlcDpib29w'}
//		 })
		 .then(function(result) {
			 $scope.greetings = result.data;
		 });  
	   }
	]);
})(window.angular);
