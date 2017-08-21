var _asyncToGenerator = require('babel-runtime/helpers/async-to-generator')['default'];

exports.__esModule = true;

var getTestObject = _asyncToGenerator(function* (fileName) {
   var objectMethod = require('./tests/' + fileName);
   if (objectMethod['default']) {
      return objectMethod['default'];
   }

   return objectMethod;
});

exports.getTestObject = getTestObject;
//# sourceMappingURL=testCollection.js.map
