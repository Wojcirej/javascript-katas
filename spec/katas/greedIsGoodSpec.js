const subject = require('./../../katas/greedIsGood/greedIsGood');

var testExample = function(dice, expectedResult) {

  describe("when dice = '" + dice + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.greedIsGood(dice);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("greedIsGood", function() {

  testExample([2, 3, 4, 6, 2], 0);
  testExample([1, 1, 1, 3, 3], 1000);
  testExample([2, 2, 2, 3, 3], 200);
  testExample([3, 3, 3, 3, 3], 300);
  testExample([4, 4, 4, 3, 3], 400);
  testExample([5, 5, 5, 3, 3], 500);
  testExample([6, 6, 6, 3, 3], 600);
  testExample([1, 1, 1, 1, 3], 1100);
  testExample([1, 1, 1, 1, 5], 1150);
  testExample([2, 4, 4, 5, 4], 450);
  testExample([3, 4, 5, 3, 3], 350);
  testExample([1, 5, 1, 3, 4], 250);
});
