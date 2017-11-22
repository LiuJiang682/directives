(function(angular) {
  'use strict';
  angular.module('monashApp', [])
    .controller('monashController', ['$scope', '$http', '$window', function($scope, $http, $window) {

      $scope.master = {};
      $scope.images = {};
 
      $scope.search = function(criteria) { 
        if (criteria) {                                         
          if (criteria.keyword === undefined 
        		  || criteria.keyword.trim() === "") {
        	  criteria.keyword = "";
            $scope.master = angular.copy(criteria);                       
            $scope.monashForm.$submitted = true;
            return false;
          }
          if (criteria.searchMode === undefined) {
        	  criteria.searchMode = "ALL";
          }
          $scope.monashForm.keyword.$setUntouched();
          $scope.monashForm.keyword.$setValidity();

          // build URL for Flickr API
          var url = "http://api.flickr.com/services/feeds/photos_public.gne";

          var searchMode = criteria.searchMode.trim();
        
          var keyword = criteria.keyword.trim();
          
           var tagMode = searchMode.toUpperCase();
            if ("ALL" === tagMode) {
              tagMode = "ALL";
            } else {
              tagMode = "ANY";
            }
            url = url + "?jsoncallback=JSON_CALLBACK" +
              "&tagmode=" + encodeURIComponent(tagMode) +
              "&tags=" + encodeURIComponent(keyword) +
              "&format=json";
           
          // send AJAX query to Flickr API
          $http.jsonp(url)
            .success(function(data, status, headers, config) {
          
              $scope.images = data;
              $scope.imagesStatus = status;
            })

          // trap error if any
            .error(function(data, status, headers, config) {            
              $scope.images = data;
              $scope.imagesStatus = status;
            });

          // reset form validation
          $scope.monashForm.keyword.$setValidity();
          }
      };

      // reset form to initial state
      $scope.resetForm = function(monashForm) {
        $scope.monashForm.keyword.$setValidity();
        $scope.images = {};
        $scope.searchCriteria = {};
      };

      // Show image
      $scope.showImage = function(url, description) {
        var mylinkes = description.split("<p><a href=\"");
        
        if (mylinkes[2]) {
          var myLarger = mylinkes[2];
          var stop = myLarger.indexOf(" ");
          myLarger = myLarger.substring(0, stop);
          myLarger = myLarger.trim();
          stop = myLarger.length;
          var finalMyLarger = myLarger.substring(0, stop - 1);
          url = finalMyLarger;
        }

        $window.open(url);
      };
    }]);
})(window.angular);