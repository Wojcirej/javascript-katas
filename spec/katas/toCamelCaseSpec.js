const subject = require('./../../katas/toCamelCase/toCamelCase');

var testExample = function(str, expectedResult) {

  describe("when str = '" + str + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.toCamelCase(str);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("toCamelCase", function() {

  testExample('', '');
  testExample("the_stealth_warrior", "theStealthWarrior");
  testExample("The-Stealth-Warrior", "TheStealthWarrior");
  testExample("A-B-C", "ABC");
});
