module.exports = {
  kataGenerator: function(kataName, params = []) {
    const fs = require("fs");
    const rootDirectoryPath = "katas/" + kataName;
    const readmeFilePath = "katas/" + kataName + "/README.md";
    const kataDefinitionFilePath = "katas/" + kataName + "/" + kataName + ".js";
    const kataSpecFilePath = "spec/katas/" + kataName + "Spec.js";
    function createKataFile(path) {
      fs.open(path, "w", function() {
        console.log("\x1b[32m%s\x1b[37m%s", "Created ", path);
      });
    };
    fs.mkdirSync(rootDirectoryPath);
    createKataFile(readmeFilePath);
    createKataFile(kataDefinitionFilePath);
    createKataFile(kataSpecFilePath);
  }
};
