const subject = require("./../../katas/distanceBetweenTwoGpsCoordinates/distanceBetweenTwoGpsCoordinates");

var testExample = function(
  latitude1,
  longitude1,
  latitude2,
  longitude2,
  expectedResult
) {
  describe(
    "when latitude1Geo = '" +
      latitude1 +
      "', when longitude1Geo = '" +
      longitude1 +
      "', when latitude2Geo = '" +
      latitude2 +
      "', when longitude2Geo = '" +
      longitude2 +
      "'",
    function() {
      it("returns " + expectedResult, function() {
        var result = subject.distanceBetweenTwoGpsCoordinates(
          latitude1,
          longitude1,
          latitude2,
          longitude2
        );
        expect(result).toEqual(expectedResult);
      });
    }
  );
};

describe("distanceBetweenTwoGpsCoordinates", function() {
  testExample(0.0, 0.0, 0.0, 0.0, 0);
  testExample(51.5, 0, 38.8, -77.1, 5918);
});
