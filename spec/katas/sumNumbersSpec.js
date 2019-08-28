const subject = require('./../../katas/sumNumbers/sumNumbers');

var testExample = function(expectedResult, ...numbers) {

  describe("when numbers = '" + numbers + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.sumNumbers(...numbers);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("sumNumbers", function() {

  testExample(6, 1, 2, 3);
  testExample(20, 2, 4, 6, 8);
  testExample(15, 1, 2, 3, 4, 5);
  testExample(4, 1, 3);
  testExample(110, 2, 5, 80, 1, 10, 12);
});