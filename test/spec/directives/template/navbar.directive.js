'use strict';

describe('Directive: template/navbar.directive', function () {

  // load the directive's module
  beforeEach(module('generatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<template/navbar.directive></template/navbar.directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the template/navbar.directive directive');
  }));
});
