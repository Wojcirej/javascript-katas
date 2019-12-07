const subject = require('./../../katas/uniqueValuesOfKey/uniqueValuesOfKey');

var testExample = function(objectsList, key, expectedResult) {

  describe("when objectsList = '" + objectsList + "', when key = '" + key + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.uniqueValuesOfKey(objectsList, key);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("uniqueValuesOfKey", function() {

  testExample([
    {
      name: "Joe",
      age: 17
    },
    {
      name: "Bob",
      age: 35
    },
    {
      name: "Frank",
      age: 17
    }
  ], 'age', [17, 35]);
});