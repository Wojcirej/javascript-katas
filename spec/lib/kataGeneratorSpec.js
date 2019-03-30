const subject = require('./../../lib/kataGenerator');
const fs = require('fs');

describe("kataGenerator", function() {
  const kataName = "testKata";
  const rootDirectoryPath = "katas/" + kataName;
  const readmeFilePath = "katas/" + kataName + "/README.md";
  const kataDefinitionFilePath = "katas/" + kataName + "/" + kataName + ".js";
  const kataSpecFilePath = "spec/katas/" + kataName + "Spec.js";

  beforeEach(function() {
    subject.kataGenerator(kataName);
  });

  afterEach(function() {
    fs.unlinkSync(kataDefinitionFilePath);
    fs.unlinkSync(readmeFilePath);
    fs.unlinkSync(kataSpecFilePath);
    if (fs.existsSync(rootDirectoryPath)) {
      fs.rmdirSync(rootDirectoryPath);
    };
  });

  function testExample(description, path) {

    it(description, function() {
      var existence;
      if (fs.existsSync(path)) {
        existence = true;
      }
      else {
        existence = false;
      };
      expect(existence).toBe(true);
    });
  };

  testExample("creates 'testKata' directory in 'katas/' directory", rootDirectoryPath);
  testExample("creates 'testKata.js' file in 'katas/testKata' directory", kataDefinitionFilePath);
  testExample("creates 'README.md' file in 'katas/testKata' directory", readmeFilePath);
  testExample("creates 'testKataSpec.js' file in 'spec/katas/' directory", kataSpecFilePath);
});

describe("humanizeKataName", function() {

  function testExample(kataName, description, expectedResult) {

    describe(description, function() {

      it("returns '" + expectedResult + "'", function() {
        expect(subject.humanizeKataName(kataName)).toEqual(expectedResult);
      });
    });
  };

  testExample("testKata", "when kataName = 'testKata'", "Test kata");
  testExample("testTestTest", "when kataName = 'testTestTest'", "Test test test");
});

describe("formatParamsForDescription", function() {

  function testExample(params, description, expectedResult) {

    describe(description, function() {

      it("returns '" + expectedResult + "'", function() {
        expect(subject.formatParamsForDescription(params)).toEqual(expectedResult);
      });
    });
  };

  testExample(["param"], "when params = '[param]'", "when param = '\" + param + \"'");
  testExample(["param1", "param2"], "when params = '[param1, param2]'", "when param1 = '\" + param1 + \"', when param2 = '\" + param2 + \"'");
});
