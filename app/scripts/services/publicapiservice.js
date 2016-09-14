'use strict';

/**
 * @ngdoc service
 * @name generatorApp.publicAPIService
 * @description
 * # publicAPIService
 * Service in the generatorApp.
 */
angular.module('generatorApp')
  .service('publicAPIService', function (APIConsoleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;	//get instance

    var api_type = 'api/public/';	//initialize public endpoints

    self.publicAPIList = [];
    self.publicBidsList = [];

    /*-------------------------
    *	Get public endpoints
    -------------------------*/
    self.GetPublicEndpoints = function (callback) {
    	APIConsoleService.sendAPIRequest('GET' , 'public/')
    		.then(function(response) {
    			self.publicAPIList = response.data;		//save public endpoints to service
    		},
    		function(response){
    			console.log(response);					//get fail response
    		});
    }
    /*-------------------------
    *	Get trades history
    --------------------------*/
    self.GetTradesHistory = function (callback){
    	APIConsoleService.sendAPIRequest('GET' , api_type + 'trades-history/')
    		.then(function(response) {
    			console.log(response);                
    			callback(true);
    		},
    		function(response){
    			console.log(response);
    			callback(false);
    		});
    }; 
    /*---------------------------
    *   Get btc aud bid list
    ---------------------------*/
    self.GetBTC_AUD_BidList = function (callback){
        APIConsoleService.sendAPIRequest('GET' , api_type + 'orderbook/btc-aud/bids/')
            .then(function(response) {
                callback(response.data);
            },
            function(response){
                console.log(response);
                callback(null);
            });
    };
    /*---------------------------
    *   Get btc aud ask list
    ---------------------------*/
    self.GetBTC_AUD_AskList = function (callback){
        APIConsoleService.sendAPIRequest('GET' , api_type + 'orderbook/btc-aud/asks/')
            .then(function(response) {
                callback(response.data);
            },
            function(response){
                console.log(response);
                callback(null);
            });
    };

  });
