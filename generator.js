const kataGenerator = require('./lib/kataGenerator');
process.argv.shift();
process.argv.shift();
const kataName = process.argv.shift();
const params = process.argv;
kataGenerator.kataGenerator(kataName, params);
