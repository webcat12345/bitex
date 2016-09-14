'use strict';

/**
 * @ngdoc service
 * @name generatorApp.APIConsoleService
 * @description
 * # APIConsoleService
 * Service in the generatorApp.
 */
angular.module('generatorApp')
  .service('APIConsoleService', function ($http) {
	var api_store_url = 'http://13.75.147.191/';	//define backend url

	var self = this;	//set instance to self

    /*----------------------------------
    *   Send API reqeust to backend
    ----------------------------------*/
    self.sendAPIRequest = function sendAPIRequest(httpMethod, APIMethod, data){
            var req = {
                method: httpMethod,
                url: api_store_url + APIMethod,
                data: data,
                headers: {
                    'Authorization': ''		//set Authorization header as accessToken- user login token
                }
            };
            return $http(req);
        };
  });
