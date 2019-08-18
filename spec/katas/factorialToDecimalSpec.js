const subject = require('./../../katas/factorialToDecimal/factorialToDecimal');

var testExample = function(factorial, expectedResult) {

  describe("when factorial = '" + factorial + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.factorialToDecimal(factorial);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("factorialToDecimal", function() {

  testExample('341010', 463);
  testExample('4041000', 2982);
});