StringCalculator = function() {
  this.add = function(numbers) {
    if (numbers === '' ) return 0;

    var delimiter = ',';
    if(numbers.substring(0, 2) === '//') {
      delimiter = new RegExp(numbers.substring(2, numbers.indexOf('\n')).replace('][', '') + '+');
      numbers = numbers.substring(numbers.indexOf('\n') + 1);
    }
    
    var negetivesFound = numbers.split(delimiter).filter(function(element) {
      return element < 0;
    });
    if (negetivesFound.length !== 0) {
      throw new NegetivesNotAllowedError(negetivesFound);
    }

    return numbers.replace('\n', delimiter).split(delimiter).filter(function(element) {
      return element <= 1000;
    }).reduce(function(previous, current) {
      return parseInt(previous) + parseInt(current);
    }, 0);
  }
}
