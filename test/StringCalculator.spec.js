describe('String Calculator', function() {
  describe('new', function() {
     it('returns an instance of StringCalculator', function() {
       expect(new StringCalculator()).to.be.instanceOf(StringCalculator);
     })
  });
  describe('new', function() {
    var calculator = new StringCalculator();
    it('returns 0 when given ""', function() {
      expect(calculator.add('')).to.equal(0);
    })
    it('returns 1 when given "1"', function() {
      expect(calculator.add('1')).to.equal(1);
    })
    it('returns 3 when given "1,2"', function() {
      expect(calculator.add('1,2')).to.equal(3);
    })
    it('returns 55 when given "1,2,3,4,5,6,7,8,9,10', function() {
      expect(calculator.add('1,2,3,4,5,6,7,8,9,10')).to.equal(55);
    })
    it('returns 6 when given "1\\n2,3', function() {
      expect(calculator.add('1\n2,3')).to.equal(6);
    })
    it('returns 3 when given "//;\\n1;2"', function() {
      expect(calculator.add('//;\n1;2')).to.equal(3);
    })
    it('throws an NegetivesNotAllowedError containing "-2" when given "1,-2,3"', function() {
      expect(function() {calculator.add('1,-2,3')}).to.throw(NegetivesNotAllowedError, /-2/);
    })
    it('returns 2 when given "2,1001" as numbers over 1000 are ignored', function() {
      expect(calculator.add('2,1001')).to.equal(2);
    })
    it('returns 6 when given "//[***]\\n1***2***3"', function() {
      expect(calculator.add('//[***]\n1***2***3')).to.equal(6);
    })
    it('returns 6 when given "//[*][%]\\n1*2%3"', function() {
      expect(calculator.add('//[*][%]\n1*2%3')).to.equal(6);
    })
    it('returns 6 when given "//[***][%%%]\\n1***2%%%3"', function() {
      expect(calculator.add('//[***][%%%]\n1***2%%%3')).to.equal(6);
    })
  })
})
