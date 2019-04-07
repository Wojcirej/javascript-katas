const subject = require('./../../katas/validBraces/validBraces');

var testExample = function(braces, expectedResult) {

  describe("when braces = '" + braces + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.validBraces(braces);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("validBraces", function() {

  testExample("(){}[]", true);
  testExample("([{}])", true);
  testExample("(}", false);
  testExample("[(])", false);
  testExample("[({})](]", false);
  testExample("()", true);
  testExample("[]", true);
  testExample("{}", true);
  testExample("(){}[]", true);
  testExample("([{}])", true);
  testExample("(}", false);
  testExample("[(])", false);
  testExample("({})[({})]", true);
  testExample("(})", false);
  testExample("(({{[[]]}}))", true);
  testExample("{}({})[]", true);
  testExample(")(}{][", false);
  testExample("())({}}{()][][", false);
  testExample("(((({{", false);
  testExample("}}]]))}])", false);
});
