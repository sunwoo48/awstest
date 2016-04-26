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

	
});
