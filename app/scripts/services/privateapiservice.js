'use strict';

/**
 * @ngdoc service
 * @name generatorApp.privateAPIService
 * @description
 * # privateAPIService
 * Service in the generatorApp.
 */
angular.module('generatorApp')
  .service('privateAPIService', function (APIConsoleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this; 	//	get instance

    self.privateAPIList = [];

    /*-------------------------
    *	Get public endpoints
    -------------------------*/
    self.GetPrivateEndpoints = function (callback) {
    	APIConsoleService.sendAPIRequest('GET' , 'private/')
    		.then(function(response) {
    			self.privateAPIList = response.data;		//save public endpoints to service
    			console.log(self.privateAPIList);
    			callback(true);
    		},
    		function(response){
    			console.log(response);					//get fail response
    			callback(false);
    		});
    };
    /*-----------------------
    *	Get private orders
    -----------------------*/
    self.GetAccountOrders = function (callback) {
    	APIConsoleService.sendAPIRequest('GET' , 'private/orders/')
    		.then(function(response) {
    			console.log(response);
    			callback(true);
    		},
    		function(response) {
    			console.log(response);
    			callback(false);
    		})
    };
  });
