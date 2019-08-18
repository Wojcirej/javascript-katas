const subject = require('./../../katas/decimalToFactorial/decimalToFactorial');

var testExample = function(number, expectedResult) {

  describe("when number = '" + number + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.decimalToFactorial(number);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("decimalToFactorial", function() {

  testExample(463, "341010");
  testExample(2982, "4041000");
  testExample(36288000, "A0000000000");
  testExample(3628800054, "76A0000021000");
  testExample(1273928000, "27A0533231100");
});