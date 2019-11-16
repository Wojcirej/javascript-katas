const subject = require('./../../katas/findVowels/findVowels');

var testExample = function(word, expectedResult) {

  describe("when word = '" + word + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.findVowels(word);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("findVowels", function() {

  testExample('mama', 'AA');
  testExample('lol', 'O');
  testExample('Today is best day of my life', 'OAIEAOIE');
});