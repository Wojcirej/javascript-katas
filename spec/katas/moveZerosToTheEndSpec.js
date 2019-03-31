const subject = require('./../../katas/moveZerosToTheEnd/moveZerosToTheEnd');

var testExample = function(arr, expectedResult) {

  describe("when arr = '" + arr + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.moveZerosToTheEnd(arr);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("moveZerosToTheEnd", function() {

  testExample([1, 2, 0, 1, 0, 1, 0, 3, 0, 1], [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  testExample([5, 0, 0, 5], [5, 5, 0, 0]);
  testExample([false, 0, 1, 2, 0, 1, 'a'], [false, 1, 2, 1, 'a', 0, 0]);
});
