const subject = require('./../../katas/findParityOutlier/findParityOutlier');

var testExample = function(integers, expectedResult) {

  describe("when integers = '" + integers + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.findParityOutlier(integers);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("findParityOutlier", function() {

  testExample([0, 1, 2], 1);
  testExample([1, 2, 3], 2);
  testExample([2,6,8,10,3], 3);
  testExample([0,0,3,0,0], 3);
  testExample([1,1,0,1,1], 0);
});
