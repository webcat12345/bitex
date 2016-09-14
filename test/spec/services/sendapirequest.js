'use strict';

describe('Service: sendAPIRequest', function () {

  // load the service's module
  beforeEach(module('generatorApp'));

  // instantiate service
  var sendAPIRequest;
  beforeEach(inject(function (_sendAPIRequest_) {
    sendAPIRequest = _sendAPIRequest_;
  }));

  it('should do something', function () {
    expect(!!sendAPIRequest).toBe(true);
  });

});
