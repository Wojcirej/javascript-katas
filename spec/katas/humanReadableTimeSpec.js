const subject = require('./../../katas/humanReadableTime/humanReadableTime');

var testExample = function(seconds, expectedResult) {

  describe("when seconds = '" + seconds + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.humanReadableTime(seconds);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("humanReadableTime", function() {

  testExample(0, '00:00:00');
  testExample(59, '00:00:59');
  testExample(60, '00:01:00');
  testExample(90, '00:01:30');
  testExample(3599, '00:59:59');
  testExample(3600, '01:00:00');
  testExample(45296, '12:34:56');
  testExample(86399, '23:59:59');
  testExample(86400, '24:00:00');
  testExample(359999, '99:59:59');
});
