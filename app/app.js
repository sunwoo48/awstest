'use strict';

var app = angular.module('photo', ['ui.router', 'ngMessages', 'ngMaterial', 'ngAnimate', 'ui.bootstrap']);

app.config(function($httpProvider, $urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/main');
	
	$stateProvider
	.state('main',{
	url: '/main',
	templateUrl: 'sites/partials/main.html',
	controller: 'mainctrl as ctrl'
	})
	.state('coffee',{
	url: '/coffee',
	templateUrl: 'sites/partials/coffee.html',
	// controller: 'c as ctrl'
	})
		.state('vinyl',{
	url: '/vinyl',
	templateUrl: 'sites/partials/vinyl.html',
	// controller: 'c as ctrl'
	})
});
