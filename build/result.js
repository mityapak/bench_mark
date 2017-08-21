var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _asyncToGenerator = require('babel-runtime/helpers/async-to-generator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

exports.__esModule = true;

var Results = (function () {
    function Results() {
        _classCallCheck(this, Results);

        this.resultsCollection = [];
    }

    Results.prototype.saveEverageResult = _asyncToGenerator(function* (intermediateResult, runCount) {
        var _this = this;

        return new _Promise(function (resolve, reject) {
            if (intermediateResult) {
                (function () {
                    var methodDescription = '';
                    var rss = 0;
                    var heapTotal = 0;
                    var heapUsed = 0;
                    var time = 0;

                    intermediateResult.forEach(function (element) {

                        methodDescription = element.methodDescription;
                        rss = rss + element.rss;
                        heapTotal = heapTotal + element.heapTotal;
                        heapUsed = heapUsed + element.heapUsed;
                        time = time + element.time;
                    });

                    rss = rss / runCount;
                    heapTotal = heapTotal / runCount;
                    heapUsed = heapUsed / runCount;
                    time = time / runCount;

                    _this.resultsCollection.push({ methodDescription: methodDescription, rss: rss, heapTotal: heapTotal, heapUsed: heapUsed, time: time });
                })();
            }
            resolve();
        });
    });
    return Results;
})();

exports['default'] = Results;
module.exports = exports['default'];
//# sourceMappingURL=result.js.map
