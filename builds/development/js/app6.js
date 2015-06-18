var myApp = angular.module('myApp',[
	'ngRoute',
	'artistControllers'
	]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('list', {
		templateURL: 'partials/list.html';
		controller: 'ListController'
	});
}]);