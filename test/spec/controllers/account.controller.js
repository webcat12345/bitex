'use strict';

describe('Controller: AccountControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorApp'));

  var AccountControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountControllerCtrl = $controller('AccountControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccountControllerCtrl.awesomeThings.length).toBe(3);
  });
});
