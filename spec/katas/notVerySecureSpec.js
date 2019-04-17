const subject = require('./../../katas/notVerySecure/notVerySecure');

var testExample = function(string, expectedResult) {

  describe("when string = '" + string + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.notVerySecure(string);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("notVerySecure", function() {

  testExample("Mazinkaiser", true);
  testExample("hello world_", false);
  testExample("PassW0rd", true);
  testExample("     ", false);
  testExample("", false);
  testExample("\n\t\n", false);
  testExample("ciao\n$$_", false);
  testExample("__ * __", false);
  testExample("&)))(((", false);
  testExample("43534h56jmTHHF3k", true);
  testExample("V_ c2k", false);
  testExample("v3BmBt6uFJJZzCPS7N_FPSmeKVHq7", false);
  testExample("j7yXHfMZuFYfiLIazP9Qes5CX", true);
  testExample("53TOjjfz15JpX_0e UXB", false);
  testExample("2a72Rs7u", true);
  testExample("JO8 k01", false);
  testExample("49e28a", true);
  testExample("dybxRD7jtc49mZ1", true);
  testExample("y2xGD", true);
  testExample("8jrSaWRQ8", true);
  testExample("e7tOevpd!49V", false);
  testExample("q", true);
  testExample("GvJzYce rD !j8y Jcz", false);
  testExample("w34QPQNTq1s8SWpvqT7rc", true);
  testExample("_S3S0OKKjojtaDtRpcvacY yGb7uBY", false);
  testExample("rPF7uVGZ", true);
  testExample("Qb_WZjkvG5KpcGPDFr", false);
  testExample("SeCnT6Y 5HQC7urcPYvXFC531tYS4", false);
  testExample("exfnm5JO 53u!h3qX5nHysenfunD", false);
  testExample("XgKfq8XSKQleZCggIr", true);
  testExample("_5pgbNOA3", false);
  testExample("w8!s", false);
  testExample("yTDdnzHxRvyNidugkYIhDW", true);
  testExample("2PFzgV d7d3iF8eM8Whc", false);
  testExample("xUxCmQZj", true);
  testExample("TQ", true);
  testExample("BLhy1CIf8c", true);
  testExample("APiIHRa0", true);
  testExample("SX", true);
  testExample("3FRzNN_sK7UCXljB", false);
  testExample("yU!sSxHYVJwlBfrfU6RPXFry mLdZy", false);
  testExample("JS jth6I4v4AiqbXyXWo tMl4kUP", false);
  testExample("f8kzX", true);
  testExample("PbVV1Hrv", true);
  testExample("KhcOP0U KFqG6C_IQTIhxOkiW9WBR", false);
  testExample("3VOFW", true);
  testExample("nPNvvUozr", true);
  testExample("aCG0k!", false);
  testExample("xDQG8zvmh_kvhx rJ0S0HiwaHZys", false);
  testExample("vzgryXuLtvsO9_2SaCjH7HzXb8D", false);
});
