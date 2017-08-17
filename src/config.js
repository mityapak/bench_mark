


export const fileName = process.argv[2];
export const testFile = require("./tests/" + fileName);
export const runCount = 5;
export const iterationCount = 500000;