'use strict';

/**
 * @ngdoc directive
 * @name generatorApp.directive:template/sidebar.directive
 * @description
 * # template/sidebar.directive
 */
angular.module('generatorApp')
  .directive('sidebar', function(){
  	return {
		templateUrl: 'views/template/sidebar.html',
	    restrict: 'E',
	    controller: 'TemplateNavControllerCtrl',
	    controllerAs: 'nav'  		
  	}
  });
