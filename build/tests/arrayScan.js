var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

exports.__esModule = true;
exports["default"] = {

    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    methodFor: function methodFor() {
        var array = this.array;
        for (var i = 1; i < array.length; i++) {
            var num = array[i];
        }
    },

    methodForOf: function methodForOf() {
        var array = this.array;
        for (var _iterator = array, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var value = _ref;

            var num = value;
        }
    },

    methodWhile: function methodWhile() {
        var array = this.array;
        var i = 0;
        while (i < array.length) {
            var num = array[i];
            i++;
        }
    }

};
module.exports = exports["default"];
//# sourceMappingURL=arrayScan.js.map
