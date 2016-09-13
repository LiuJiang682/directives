angular.module('greetMod', [])
	.factory('alert', function($window) {
		return function(text) {
			$window.alert(text);
		}
	})
	.value('salutation', 'Good morning!')
	.factory('greet', function(salutation, alert) {
		return function(name) {
			alert(salutation + " " + name + "!");
		}
	});