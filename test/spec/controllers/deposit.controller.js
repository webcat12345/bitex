'use strict';

describe('Controller: DepositControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var DepositControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DepositControllerCtrl = $controller('DepositControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DepositControllerCtrl.awesomeThings.length).toBe(3);
  });
});
