angular.module('controllers', [])
	.controller('FirstController', ['$scope', 'dataSvc', function($scope, dataSvc) {
		$scope.saveData = function() {
			dataSvc.save($scope.bookDetails).then(function() {
				$scope.bookDetails = {};
				$scope.bookForm.$setPristine();
			});
		};
		
		$scope.numberPattern = /^\d*$/;
		$scope.stringPattern = /^[a-zA-Z]*$/;
	}])
	.controller('SecondController', ['dataSvc', function(dataSvc) {
		var vm = this;
		
		vm.saveData = function() {
			dataSvc.save(vm.bookDetails).then(function() {
				vm.bookDetails = {};
				vm.bookForm.$setPristine();
			});
		};
		
		vm.numberPattern = /^\d*$/;
		vm.stringPattern = /^[a-zA-z]*$/;
	}]);
