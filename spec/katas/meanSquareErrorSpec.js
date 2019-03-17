const subject = require('./../../katas/meanSquareError/meanSquareError');

var testExample = function(firstArray, secondArray, expectedResult) {

  describe("when firstArray = '" + firstArray + "', secondArray = '" + secondArray + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.meanSquareError(firstArray, secondArray);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("meanSquareError", function() {

  testExample([1, 2, 3], [4, 5, 6], 9);
  testExample([10, 20, 10, 2], [10, 25, 5, -2], 16.5);
  testExample([-1, 0], [0, -1], 1);
});
