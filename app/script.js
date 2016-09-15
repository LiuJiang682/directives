(function(angular) {
  'use strict';
  angular.module('3wksFlickr', [])
    .controller('3wksController', ['$scope', '$http', '$window', function($scope, $http, $window) {
console.log("inside controller");
      $scope.master = {};
      $scope.images = {};
console.log("1 " + searchCriteria);
      $scope.search = function(searchCriteria) { console.log("2 " + searchCriteria);
      	if (searchCriteria) {
      		if (searchCriteria.keyword == undefined || searchCriteria.keyword.trim() == "") {
                searchCriteria.keyword = null;
                $scope.master = angular.copy(searchCriteria);
                $scope.form.$submitted = true;
                return false;
              }
              if (searchCriteria.searchMode == undefined) {
                searchCriteria.searchMode = "";
              }
              $scope.form.keyword.$setUntouched();
              $scope.form.keyword.$setValidity();

              // build URL for Flickr API
              var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne";

              var searchMode = searchCriteria.searchMode.trim();
              var keyword = $scope.searchCriteria.keyword.trim();
              if (searchMode === "author") {
                flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK" +
                  "&ids=" + encodeURIComponent(keyword) +
                  "&format=json";
              } else if (searchMode === "tagmode") {
                var tagMode = keyword.toUpperCase();
                if ("ALL" === tagMode) {
                  tagMode = "ALL";
                } else {
                  tagMode = "ANY";
                }
                flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK" +
                  "&tagmode=" + encodeURIComponent(tagMode) +
                  "&format=json";
              } else {
                flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK" +
                  "&tags=" + encodeURIComponent(keyword) +
                  "&format=json";
              }

              // send AJAX query to Flickr API
              $http.jsonp(flickrAPI)
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
              $scope.form.keyword.$setValidity();
      	}
        
      };

      // reset form to initial state
      $scope.resetForm = function(form) {
        $scope.form.keyword.$setValidity();
        $scope.images = {};
        $scope.searchCriteria = {};
        $scope.searchCriteria.searchMode = "tags";
      };

      // Show image
      $scope.showImage = function(url, description) {
        console.log(description);
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