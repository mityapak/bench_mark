import {fork} from 'child_process';
import Result from './result';
import {table} from 'table';
import {getMethodsArray} from './getTest'

export default class BenchModule extends Result {
    constructor(fileName, testFile, runCount, iterationCount) {
        super();
        this.runFile = __dirname + '/runTests';
        this.fileName = fileName;
        this.testFile = testFile;
        this.runCount = runCount;
        this.iterrationCount = iterationCount;
                    this.runTest();
                };

                async runTest() {
                    let objectTest = this.testFile;
                    let testArray = [];
                    testArray.push(objectTest)
                    let methodsArray = await getMethodsArray(this.testFile)

                    for (let methodName of methodsArray) {
                        let intermediateResult = await this.startChildProcess(this.fileName, methodName);
                        await this.saveEverageResult(intermediateResult, this.runCount);
                    }
                    this.showResult();
                };


                async startChildProcess(fileName, methodName) {

                    let results = [];
                    for (let i = 0; i < this.runCount; i++) {
                        results.push(await this.sendTask(fileName, methodName));
                    }
                    return results;
                }

                async sendTask(fileName, methodName) {
                    const iterrationCount = this.iterrationCount;
                    return new Promise((resolve, reject) => {

                        let child = fork(this.runFile);

                        child.on("message", ({type, data}) => {
                            switch (type) {
                    case 1:
                        child.send({
                            fileName,
                            methodName,
                            iterrationCount
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
            child.on("error", (error) => {
                reject(error)
            });
        });
    };

    showResult() {
        let data, output;
        data = getData(this.resultsCollection);
        output = table(data);
        console.log(output);
    }
}


function getData(data) {
    let dataArray = [];
    let header = Object.getOwnPropertyNames(data[0]);
    dataArray.push(header);
    data.forEach(element => {
        let data = [];
        for (let value in element) {
            data.push(element[value])
        }
        dataArray.push(data)

    });
    return dataArray;
}