'use strict';

var StringCalculator = function() {
  var checkForNegativeNumbers = function(delimiter, numbers) {
    var negatives = numbers.split(delimiter).filter(function(element) {
      return element < 0;
    })
    if (negatives.length !== 0) {
      throw new NegativesNotAllowedError(negatives);
    }
  }

  var sanitizeDelimiter = function(numbers) {
    return '(' + numbers.substring(3, numbers.indexOf('\n') - 1).split('][').map(function(element) {
        return element.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    }).join(')|(') + ')';
  }

  this.add = function(numbers) {
    if (numbers === '') return 0;

    var delimiter = ',';
    if (numbers.substring(0, 2) === '//') {
      delimiter = new RegExp(sanitizeDelimiter(numbers)); 
      numbers = numbers.substring(numbers.indexOf('\n') + 1);
    }

    checkForNegativeNumbers(delimiter, numbers);

    return numbers.replace('\n', delimiter).split(delimiter).filter(function(element) {
      return element <= 1000;
    }).reduce(function(previous, current) {
      return parseInt(previous) + parseInt(current);
    }, 0);
  }
}
