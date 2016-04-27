/**
 * 
 */
(function() {
	
	var app = angular.module('carsales', ['ngRoute', 'ui.bootstrap']);
	
	app.config(function($routeProvider){
		
		$routeProvider
			.when('/', {
				controller: 'AdvertController',
				templateUrl: '../views/adverts.html'
			})
			.when('/new-advert', {
				controller: 'AdvertController',
				templateUrl: '../views/new-advert.html'
			})
			.when('/advert/:id', {
				controller: 'SingleAdvertController',
				templateUrl: '../views/advert.html'
			})
			.otherwise({ redirectTo : '/'});
	});
}());