'use strict';

/**
 * @ngdoc service
 * @name generatorApp.authenticationService
 * @description
 * # authenticationService
 * Service in the generatorApp.
 */
angular.module('generatorApp')
  .service('authenticationService', function (APIConsoleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;	//	get instance 

    self.LoginAction = function(username , password , callback) {
    	APIConsoleService.sendAPIRequest('POST' , 'api-auth/login/' , {username: username , password: password})
    		.then(function(response) {
    			console.log(response);
    			callback(true);
    		},
    		function(response) {
    			console.log(response);
    			callback(false);
    		});
    };

  });
