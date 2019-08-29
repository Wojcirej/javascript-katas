const subject = require('./../../katas/sumOnlyNumbers/sumOnlyNumbers');

var testExample = function(object, expectedResult) {

  describe("when object = '" + object + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.sumOnlyNumbers(object);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("sumOnlyNumbers", function() {

  testExample({ a: 10, b: 15, c: "text", d: -1 }, 24);
  testExample({ a: "text", b: "some other text" }, 0);
});