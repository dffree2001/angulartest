var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.author={
		name: 'Debbie',
		title: 'Webmaster',
		company: 'FCC'
	}
});