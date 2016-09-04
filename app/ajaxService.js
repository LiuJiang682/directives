angular.module('aservices', [])
  .service('ajaxSvc', ['myHttpSvc', function(myHttpSvc) {
	  this.myGet = function(id) {
		  if (id) {
			  return myHttpSvc.get(id);
		  }
		  else {
			  return "";
		  }
	  }
  }]);
