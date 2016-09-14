'use strict';

describe('Service: privateAPIService', function () {

  // load the service's module
  beforeEach(module('generatorApp'));

  // instantiate service
  var privateAPIService;
  beforeEach(inject(function (_privateAPIService_) {
    privateAPIService = _privateAPIService_;
  }));

  it('should do something', function () {
    expect(!!privateAPIService).toBe(true);
  });

});
