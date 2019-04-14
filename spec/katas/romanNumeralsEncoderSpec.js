const subject = require('./../../katas/romanNumeralsEncoder/romanNumeralsEncoder');

var testExample = function(number, expectedResult) {

  describe("when number = '" + number + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.romanNumeralsEncoder(number);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("romanNumeralsEncoder", function() {

  testExample(1, 'I');
  testExample(2, 'II');
  testExample(3, 'III');
  testExample(4, 'IV');
  testExample(5, 'V');
  testExample(9, 'IX');
  testExample(10, 'X');
  testExample(11, 'XI');
  testExample(14, 'XIV');
  testExample(15, 'XV');
  testExample(19, 'XIX')
  testExample(21, 'XXI');
  testExample(22, 'XXII')
  testExample(89, 'LXXXIX');
  testExample(91, 'XCI');
  testExample(984, 'CMLXXXIV');
  testExample(1000, 'M');
  testExample(1889, 'MDCCCLXXXIX');
  testExample(1989, 'MCMLXXXIX');
  testExample(1001, 'MI');
  testExample(1990, 'MCMXC');
  testExample(2007, 'MMVII');
  testExample(2008, 'MMVIII');
});
