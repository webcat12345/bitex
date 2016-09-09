'use strict';

describe('Directive: template/sidebar.directive', function () {

  // load the directive's module
  beforeEach(module('generatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<template/sidebar.directive></template/sidebar.directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the template/sidebar.directive directive');
  }));
});
