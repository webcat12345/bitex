'use strict';

/**
 * @ngdoc function
 * @name generatorApp.controller:AccountControllerCtrl
 * @description
 * # AccountControllerCtrl
 * Controller of the generatorApp
 */
angular.module('generatorApp')
  .controller('AccountControllerCtrl', function ($scope , publicAPIService , privateAPIService , authenticationService) {
  	
  	var self = this;	//get instance;

  	//	check public endpoints by listing
  	// publicAPIService.GetPublicEndpoints(function(callback_response) {
  	
  	// });

  	// publicAPIService.GetTradesHistory(function(callback_response) {

  	// 	if (callback_response) {
  		
  	// 	}	else	{
  		
  	// 	}

  	// });

  	// privateAPIService.GetPrivateEndpoints(function(callback_response) {

  	// });

  	// privateAPIService.GetAccountOrders(function(callback_response) {

  	// })

  	authenticationService.LoginAction('user1', 'user1' , function(callback_response) {
  		if (callback_response) {

  		}
  	});

  });
