exports.__esModule = true;
var fileName = process.argv[2];
exports.fileName = fileName;
var testFile = require("./tests/" + fileName);
exports.testFile = testFile;
var runCount = 5;
exports.runCount = runCount;
var iterationCount = 500000;
exports.iterationCount = iterationCount;
//# sourceMappingURL=config.js.map
