'use strict';

/**
 * @ngdoc function
 * @name generatorApp.controller:TestpageControllerJsCtrl
 * @description
 * # TestpageControllerJsCtrl
 * Controller of the generatorApp
 */
angular.module('generatorApp')
  .controller('TestpageControllerJsCtrl', function (publicAPIService) {

  	var self = this;	//get instance

  	self.totalBidsNum = 0;	//total bid nums
    self.totalAsksNum = 0;
  	self.bidsList = [];
    self.asksList = [];

  	publicAPIService.GetBTC_AUD_BidList(function(callback_response) {
  		if (callback_response) {

  			console.log(callback_response);

  			self.totalBidsNum = callback_response.count;

  			self.bidsList = callback_response.results;
  		}
  	});
    publicAPIService.GetBTC_AUD_AskList(function(callback_response) {
      if (callback_response) {
        self.totalAsksNum = callback_response.count;
        self.asksList = callback_response.results;
      }
    });
  });
