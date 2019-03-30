module.exports = {
  kataGenerator: function(kataName, params = []) {
    const fs = require("fs");
    const rootDirectoryPath = "katas/" + kataName;
    const readmeFilePath = "katas/" + kataName + "/README.md";
    const kataDefinitionFilePath = "katas/" + kataName + "/" + kataName + ".js";
    const kataSpecFilePath = "spec/katas/" + kataName + "Spec.js";
    this.createKataRootDirectory(rootDirectoryPath);
    this.createKataFile(readmeFilePath, this.readmeFileContent(kataName));
    this.logFileCreation(readmeFilePath);
    this.createKataFile(kataDefinitionFilePath, this.kataDefinitionFileContent(kataName, params));
    this.logFileCreation(kataDefinitionFilePath);
    this.createKataFile(kataSpecFilePath, this.kataSpecFileContent(kataName, params));
    this.logFileCreation(kataSpecFilePath);
  },
  createKataRootDirectory: function(path) {
    const fs = require("fs");
    fs.mkdirSync(path, function(error) {
      if (error) throw error;
    });
    console.log("\x1b[32m%s\x1b[37m%s", "Created ", path);
  },
  createKataFile: function(path, content) {
    const fs = require("fs");
    fs.writeFileSync(path, content, function(error) {
      if (error) throw error;
    });
  },
  logFileCreation: function(path) {
    console.log("\t\x1b[32m%s\x1b[37m%s", "Created ", path);
  },
  readmeFileContent: function(kataName) {
    var content = "# " + this.humanizeKataName(kataName) + "\n\n";
    content += "### Description\n";
    content += "<!-- Add kata description here -->\n\n";
    content += "### Examples\n";
    content += "<!-- Add your examples here -->\n";
    content += "```javascript\n```\n\n";
    content += "### Link to kata on codewars.com\n";
    return content;
  },
  humanizeKataName: function(kataName) {
    var lowerCased = kataName.replace(/([A-Z]+)/g, " $1").toLowerCase();
    return lowerCased[0].toUpperCase() + lowerCased.slice(1);
  },
  kataDefinitionFileContent: function(kataName, params) {
    var content = "module.exports = {\n";
    content += "  " + kataName + ": function(" + params.join(", ") + ") {\n";
    content += "  }\n";
    content += "};";
    return content;
  },
  kataSpecFileContent: function(kataName, params) {
    var content = "const subject = require('./../../katas/" + kataName + "/" + kataName + "');\n\n";
    content += "var testExample = function(" + params.join(", ") + ", expectedResult) {\n\n";
    content += "  describe(\"" + this.formatParamsForDescription(params) + "\", function() {\n\n";
    content += "    it(\"returns \" + expectedResult, function() {\n";
    content += "      var result = subject." + kataName + "(" + params.join(", ") + ");\n";
    content += "      expect(result).toEqual(expectedResult);\n"
    content += "    });\n";
    content += "  });\n";
    content += "};\n\n";
    content += "describe(\"" + kataName + "\", function() {\n\n";
    content += "  //Include your test examples here like:\n";
    content += "  //testExample(list, of, params, expectedResult);\n";
    content += "});"
    return content;
  },
  formatParamsForDescription: function(params) {
    var content = "";
    for(var i = 0; i < params.length; ++i) {
      content += "when " + params[i] + " = '\" + " + params[i] + " + \"'";
      if (i < params.length - 1) {
        content += ", ";
      };
    }
    return content;
  }
};
