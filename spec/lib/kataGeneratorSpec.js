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
    fs.unlink(kataDefinitionFilePath, function(err) {
      if (err) throw err;
    });
    fs.unlink(readmeFilePath, function(err) {
      if (err) throw err;
    });
    fs.unlink(kataSpecFilePath, function(err) {
      if (err) throw err;
    });
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
