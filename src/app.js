import BenchModule from './benchModule';
import * as config from './config';




let bench = new BenchModule(config.fileName, config.testFile, config.runCount, config.iterationCount);