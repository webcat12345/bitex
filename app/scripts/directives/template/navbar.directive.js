'use strict';

/**
 * @ngdoc directive
 * @name generatorApp.directive:template/navbar.directive
 * @description
 * # template/navbar.directive
 */
angular.module('generatorApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/template/navbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the template/navbar.directive directive');
      }
    };
  });
