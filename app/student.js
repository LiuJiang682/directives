(function(angular){
	angular.module("mainApp", [])
	.controller('StudentController', function($scope) {
		$scope.Mahesh = {};
		$scope.Mahesh.name = "Mahesh Parashar";
		$scope.Mahesh.rollno  = 1;
		$scope.Mahesh.phone = "";

		$scope.Piyush = {};
		$scope.Piyush.name = "Piyush Parashar";
		$scope.Piyush.rollno  = 2;
		$scope.Piyush.phone = "";
	})
	.directive('student', function() {
		return {
			restict: 'E',
			require: 'ngModel',
			scope: {
				student: '=name',
//				rollno: '=rollno',
//				phone: '=phone'
			},
			link: function(scope, element, attributes, ngModelCtrl) {
//				element.html("Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b><br/>");
//				element.css("background-color", "#ff00ff");
				console.log("inside link");
				function fromUser(text) {
	                if (!text)
	                    return text;

	                if (text.length > 3) {
	                	var correctText = text.substr(0, 3);
	                	ngModelCtrl.$setViewValue(correctText);
	                    ngModelCtrl.$render();
	                    return correctText;
	                }
	                return text;
	            }
	            ngModelCtrl.$parsers.push(fromUser);
			},
			template: '<b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>' + '<input type=\"text" ng-model=\"student.phone\"/>'
		}
	});
})(window.angular);
//     var mainApp = angular.module("mainApp", []);
//         
//         mainApp.directive('student', function() {
//            var directive = {};
//            directive.restrict = 'E';
//            directive.template = "" +
//            	"Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
//            
//            directive.scope = {
//               student : "=name"
//            }
//            
//            directive.compile = function(element, attributes) {
//               element.css("border", "1px solid #cccccc");
//               
//               var linkFunction = function($scope, element, attributes) {
//                  element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
//                  element.css("background-color", "#ff00ff");
//               }
//               return linkFunction;
//            }
//            
//            return directive;
//         });
//         
//         mainApp.controller('StudentController', function($scope) {
//            $scope.Mahesh = {};
//            $scope.Mahesh.name = "Mahesh Parashar";
//            $scope.Mahesh.rollno  = 1;
//
//            $scope.Piyush = {};
//            $scope.Piyush.name = "Piyush Parashar";
//            $scope.Piyush.rollno  = 2;
//         });