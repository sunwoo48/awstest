
var app = angular.module('sunwoo', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'sites/partials/home.html',
	})

	.otherwise({
		redirectTo:'/'
	});



});


