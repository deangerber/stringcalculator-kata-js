StringCalculator = function() {
  var checkForNegetiveNumbers = function(delimeter, numbers) {
    var negetives = numbers.split(delimeter).filter(function(element) {
      return element < 0;
    })
    if (negetives.length !== 0) {
      throw new NegetivesNotAllowedError(negetives);
    }
  }

  this.add = function(numbers) {
    if (numbers === '') return 0;

    var delimeter = ',';
    if (numbers.substring(0, 2) === '//') {
      delimeter = numbers.substring(2, numbers.indexOf('\n'));
      numbers = numbers.substring(numbers.indexOf('\n') + 1);
    }

    checkForNegetiveNumbers(delimeter, numbers);

    return numbers.replace('\n', delimeter).split(delimeter).reduce(function(previous, current) {
      return parseInt(previous) + parseInt(current);
    }, 0);
  }
}
