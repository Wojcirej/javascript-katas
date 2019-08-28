const subject = require('../../katas/vowelCount/vowelCount');

var testExample = function(text, expectedResult) {

  describe("when text = '" + text + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.vowelCount(text);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("vowelCount", function() {

  testExample('mama', 2);
  testExample('lol', 1);
  testExample('Today is best day of my life', 8);
});