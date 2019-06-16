const subject = require('./../../katas/lastDigit/lastDigit');

var testExample = function(a, b, expectedResult) {

  describe("when a = '" + a + "', when b = '" + b + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.lastDigit(a, b);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("lastDigit", function() {

  testExample("0", "0", 1);
  testExample("4", "1", 4);
  testExample("4", "2", 6);
  testExample("9", "7", 9);
  testExample("10","10000000000", 0);
  testExample("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376", 6);
  testExample("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651", 7);
});
