const subject = require('./../../lib/kataGenerator');
const fs = require('fs');

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

  testExample("creates 'testKata' directory in 'katas/' directory", rootDirectoryPath);
  testExample("creates 'testKata.js' file in 'katas/testKata' directory", kataDefinitionFilePath);
  testExample("creates 'README.md' file in 'katas/testKata' directory", readmeFilePath);
  testExample("creates 'testKataSpec.js' file in 'spec/katas/' directory", kataSpecFilePath);
});
