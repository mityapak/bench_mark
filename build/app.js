var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _benchModule = require('./benchModule');

var _benchModule2 = _interopRequireDefault(_benchModule);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

var bench = new _benchModule2['default'](config.fileName, config.testFile, config.runCount, config.iterationCount);
//# sourceMappingURL=app.js.map
