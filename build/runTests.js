var _asyncToGenerator = require('babel-runtime/helpers/async-to-generator')['default'];

var _testCollection = require('./testCollection');

function runTest() {
    try {
        process.on("message", _asyncToGenerator(function* (_ref) {
            var fileName = _ref.fileName;
            var methodName = _ref.methodName;
            var iterrationCount = _ref.iterrationCount;

            var objectTest = yield _testCollection.getTestObject(fileName);
            var startTime = new Date().getTime();
            for (var i = 0; i < iterrationCount; i++) {
                objectTest[methodName];
            }

            var endTime = new Date().getTime();
            var endProcess = process.memoryUsage();

            var _compile = compile(endProcess, startTime, endTime);

            var rss = _compile.rss;
            var heapTotal = _compile.heapTotal;
            var heapUsed = _compile.heapUsed;
            var time = _compile.time;

            process.send({
                type: 2, data: {
                    methodDescription: methodName,
                    rss: rss,
                    heapTotal: heapTotal,
                    heapUsed: heapUsed,
                    time: time
                }
            });

            process.exit(0);
        }));
        process.on('uncaughtException', function (error) {
            process.send({
                type: 3,
                data: error
            });
        });
        process.send({ type: 1, state: "ready" });
    } catch (error) {
        console.log(error.message);
    }
}

try {
    runTest();
} catch (err) {
    console.log(err);
    console.log(err.message);
}

function compile(endProcess, startTime, endTime) {
    return {
        rss: endProcess.rss,
        heapTotal: endProcess.heapTotal,
        heapUsed: endProcess.heapUsed,
        time: endTime - startTime
    };
}
//# sourceMappingURL=runTests.js.map
