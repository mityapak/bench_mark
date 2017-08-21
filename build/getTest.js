var _asyncToGenerator = require("babel-runtime/helpers/async-to-generator")["default"];

var _Object$getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names")["default"];

exports.__esModule = true;

var getMethodsArray = _asyncToGenerator(function* (objectTest) {
    var methodsArray = [];
    var properties = _Object$getOwnPropertyNames(objectTest);
    properties.forEach(function (methodName) {
        var method = objectTest[methodName];
        if (method && method.constructor === Function) {
            methodsArray.push(methodName);
        }
    });

    return methodsArray;
});

exports.getMethodsArray = getMethodsArray;
//# sourceMappingURL=getTest.js.map
