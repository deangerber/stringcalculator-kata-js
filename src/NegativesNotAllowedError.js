'use strict';

var NegativesNotAllowedError = function(message) {
  this.name = 'NegativesNotAllowedError';
  this.message = message;
}

NegativesNotAllowedError.prototype = new Error();
NegativesNotAllowedError.prototype.constructor = NegativesNotAllowedError;
