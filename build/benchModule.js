var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _asyncToGenerator = require('babel-runtime/helpers/async-to-generator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _Object$getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _child_process = require('child_process');

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

var _table = require('table');

var _getTest = require('./getTest');

var BenchModule = (function (_Result) {
    _inherits(BenchModule, _Result);

    function BenchModule(fileName, testFile, runCount, iterationCount) {
        _classCallCheck(this, BenchModule);

        _Result.call(this);
        this.runFile = __dirname + '/runTests';
        this.fileName = fileName;
        this.testFile = testFile;
        this.runCount = runCount;
        this.iterrationCount = iterationCount;
        this.runTest();
    }

    BenchModule.prototype.runTest = _asyncToGenerator(function* () {
        var objectTest = this.testFile;
        var testArray = [];
        testArray.push(objectTest);
        var methodsArray = yield _getTest.getMethodsArray(this.testFile);

        for (var _iterator = methodsArray, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var methodName = _ref;

            var intermediateResult = yield this.startChildProcess(this.fileName, methodName);
            yield this.saveEverageResult(intermediateResult, this.runCount);
        }
        this.showResult();
    });
    BenchModule.prototype.startChildProcess = _asyncToGenerator(function* (fileName, methodName) {

        var results = [];
        for (var i = 0; i < this.runCount; i++) {
            results.push((yield this.sendTask(fileName, methodName)));
        }
        return results;
    });
    BenchModule.prototype.sendTask = _asyncToGenerator(function* (fileName, methodName) {
        var _this = this;

        var iterrationCount = this.iterrationCount;
        return new _Promise(function (resolve, reject) {

            var child = _child_process.fork(_this.runFile);

            child.on("message", function (_ref2) {
                var type = _ref2.type;
                var data = _ref2.data;

                switch (type) {
                    case 1:
                        child.send({
                            fileName: fileName,
                            methodName: methodName,
                            iterrationCount: iterrationCount
                        });
                        break;

                    case 2:
                        resolve(data);
                        break;

                    case 3:
                        reject(data);
                        break;
                }
            });
            child.on("error", function (error) {
                reject(error);
            });
        });
    });

    BenchModule.prototype.showResult = function showResult() {
        var data = undefined,
            output = undefined;
        data = getData(this.resultsCollection);
        output = _table.table(data);
        console.log(output);
    };

    return BenchModule;
})(_result2['default']);

exports['default'] = BenchModule;

function getData(data) {
    var dataArray = [];
    var header = _Object$getOwnPropertyNames(data[0]);
    dataArray.push(header);
    data.forEach(function (element) {
        var data = [];
        for (var value in element) {
            data.push(element[value]);
        }
        dataArray.push(data);
    });
    return dataArray;
}
module.exports = exports['default'];
//# sourceMappingURL=benchModule.js.map
