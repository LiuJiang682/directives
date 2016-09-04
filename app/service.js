angular.module('services', [])
  .service('sampleSvc', ['$window', 'modalSvc', function($window, modalSvc){
    this.showDialog = function(message, title){
      if ((message) && (title)){
        modalSvc.showModalDialog({
          title: title,
          message: message
        });
      } else if (message){
        $window.alert(message);
      } else {
    	$window.alert("No parameters!");  
      }
    };
  }]);
