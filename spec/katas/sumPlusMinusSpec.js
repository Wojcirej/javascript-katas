const subject = require('./../../katas/sumPlusMinus/sumPlusMinus');

var testExample = function(numbers, expectedResult) {

  describe("when numbers = '" + numbers + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.sumPlusMinus(numbers);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("sumPlusMinus", function() {

  testExample([10, -12, 30, -1, -8, 0, 14, -33, 20], { plus: 74, minus: -54 });
});