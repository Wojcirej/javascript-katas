module.exports = {
  kataGenerator: function(kataName, params = []) {
    const fs = require("fs");
    const rootDirectoryPath = "katas/" + kataName;
    const readmeFilePath = "katas/" + kataName + "/README.md";
    const kataDefinitionFilePath = "katas/" + kataName + "/" + kataName + ".js";
    const kataSpecFilePath = "spec/katas/" + kataName + "Spec.js";
    fs.mkdirSync(rootDirectoryPath, function(error) {
      if (error) throw error;
    });
    this.createKataFile(readmeFilePath, this.readmeFileContent(kataName));
    this.logFileCreation(readmeFilePath);
    this.createKataFile(kataDefinitionFilePath, "");
    this.logFileCreation(kataDefinitionFilePath);
    this.createKataFile(kataSpecFilePath, "");
    this.logFileCreation(kataSpecFilePath);
  },
  createKataFile: function(path, content) {
    const fs = require("fs");
    fs.writeFileSync(path, content, function(error) {
      if (error) throw error;
    });
  },
  logFileCreation: function(path) {
    console.log("\x1b[32m%s\x1b[37m%s", "Created ", path);
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
  }
};
