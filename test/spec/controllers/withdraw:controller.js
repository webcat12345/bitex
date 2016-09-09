'use strict';

describe('Controller: WithdrawControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var WithdrawControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WithdrawControllerCtrl = $controller('WithdrawControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WithdrawControllerCtrl.awesomeThings.length).toBe(3);
  });
});
