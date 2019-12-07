const subject = require('./../../katas/removeDuplicates/removeDuplicates');

var testExample = function(list, expectedResult) {

  describe("when list = '" + list + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.removeDuplicates(list);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("removeDuplicates", function() {

  testExample([2016, 2017, 2019, 2017, 2019], [2016, 2017, 2019]);
});