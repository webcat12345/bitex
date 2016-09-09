'use strict';

describe('Controller: TemplateNavControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var TemplateNavControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplateNavControllerCtrl = $controller('TemplateNavControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TemplateNavControllerCtrl.awesomeThings.length).toBe(3);
  });
});
