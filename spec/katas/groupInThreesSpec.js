const subject = require("./../../katas/groupInThrees/groupInThrees");

var testExample = function(list, expectedResult) {
  describe("when list = '" + list + "'", function() {
    it("returns " + expectedResult, function() {
      var result = subject.groupInThrees(list);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("groupInThrees", function() {
  testExample(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, undefined, undefined]
    ]
  );
});
