'use strict';

describe('Controller: TestpageControllerJsCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var TestpageControllerJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestpageControllerJsCtrl = $controller('TestpageControllerJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestpageControllerJsCtrl.awesomeThings.length).toBe(3);
  });
});
