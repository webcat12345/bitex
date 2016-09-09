'use strict';

describe('Controller: BuysellControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var BuysellControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuysellControllerCtrl = $controller('BuysellControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BuysellControllerCtrl.awesomeThings.length).toBe(3);
  });
});
