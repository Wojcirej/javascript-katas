const subject = require('./../../katas/weekDayFromDate/weekDayFromDate');

var testExample = function(date, expectedResult) {

  describe("when date = '" + date + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.weekDayFromDate(date);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("weekDayFromDate", function() {

  testExample("2019-06-02", "Sunday");
  testExample("2019-05-27", "Monday");
  testExample("2019-05-28", "Tuesday");
  testExample("2019-05-29", "Wednesday");
  testExample("2019-05-30", "Thursday");
  testExample("2009-12-25", "Friday");
  testExample("2019-06-01", "Saturday");
});
