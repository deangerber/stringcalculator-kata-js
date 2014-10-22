NegetivesNotAllowedError = function(message) {
  this.name = 'NegetivesNotAllowedError';
  this.message = message;
}

NegetivesNotAllowedError.prototype = new Error();
NegetivesNotAllowedError.prototype.constructor = NegetivesNotAllowedError;
