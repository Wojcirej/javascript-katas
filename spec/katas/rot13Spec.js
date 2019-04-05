const subject = require('./../../katas/rot13/rot13');

var testExample = function(input, expectedResult) {

  describe("when input = '" + input + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.rot13(input);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("rot13", function() {

  testExample('EBG13 rknzcyr.', 'ROT13 example.');
  testExample('This is my first ROT13 excercise!', 'Guvf vf zl svefg EBG13 rkprepvfr!');
});
