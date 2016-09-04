(function (angular) {
  'use strict';
  angular.module('3wksformFlickr', [])
    .controller('3wksController', ['$scope', '$http', function ($scope, $http) {

      $scope.master = {};
      $scope.images = {};

      $scope.search = function (searchCriteria) {
        // console.log(searchCriteria.mode);
        // console.log(searchCriteria.searchMode);
      // console.log(searchCriteria.tags);
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
          flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&ids=" + encodeURIComponent(keyword)
          + "&format=json";
        }
        else if (searchMode === "tagmode") {
          var tagMode = keyword.toUpperCase();
          if ("ALL" === tagMode) {
            tagMode = "ALL";
          }
          else {
            tagMode ="ANY";
          }
          flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tagmode=" + encodeURIComponent(tagMode)
          + "&format=json";
        }
        else {
        flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tags=" + encodeURIComponent(keyword)
          + "&format=json";
        }
        // console.log(flickrAPI);
        // send AJAX query to Flickr API
        $http.jsonp(flickrAPI)
          .success(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;

        })
        
        // trap error if any
          .error(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;
        });
        
        // reset form validation
        $scope.form.keyword.$setValidity();
      };
      
      // reset form to initial state
      $scope.resetForm = function (form) {
        $scope.form.keyword.$setValidity();
        $scope.images = {};
        $scope.searchCriteria = {};
        $scope.searchCriteria.searchMode="tags";
      };

    }]);
})(window.angular);
