'use strict';

/**
 * @ngdoc function
 * @name generatorApp.controller:TemplateNavControllerCtrl
 * @description
 * # TemplateNavControllerCtrl
 * Controller of the generatorApp
 */
angular.module('generatorApp')
  .controller('TemplateNavControllerCtrl', function ($window) {

  	var	self = this;

  	self.openSpecificPage = function openSpecificPage(page_name) {
  		$window.location = "/#/" + page_name;
  		$window.location.reload();
  	}

  });
