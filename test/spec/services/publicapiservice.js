'use strict';

describe('Service: publicAPIService', function () {

  // load the service's module
  beforeEach(module('generatorApp'));

  // instantiate service
  var publicAPIService;
  beforeEach(inject(function (_publicAPIService_) {
    publicAPIService = _publicAPIService_;
  }));

  it('should do something', function () {
    expect(!!publicAPIService).toBe(true);
  });

});
