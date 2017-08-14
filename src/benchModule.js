import {fork} from "child_process";
import {table} from "table";
import Results from './result';

export class BenchModule extends Results{
    constructor (runCount, {methodCollection, objectMethod}) {
        super();
        this.runFile = __dirname + '/runTest';
        this.methodCollection = methodCollection;
        this.methodObject = objectMethod;
        this.runCount = runCount;
        this.childs = [];
        this.runTest();

    };
    runTest (){
        for (let i = 0; i < this.methodCollection.length; i++ ) {
            console.log(this.methodCollection)
            let methodName = this.methodCollection[i]
            for (let j = 0; j < this.runCount; j++) {

                const child = fork(this.runFile);
                child.on('message', ({type, data}) => {

                    switch (true) {
                        case type === 1:
                            child.send({
                                methodObject: this.methodObject ,
                                methodName
                            });
                            break;

                        case type === 2:
                            this.saveResult(data, runCount);
                            break;

                        case type === 3:
                            onError(data);
                            break;
                    }
                });

                this.childs.push(child);
            }

        }

            this.showResult();

    }

    showResult(){
        process.exit(0);
        let data, output;

        data = getData (this.resultsCollection);
        output = table(data);

        console.log(output);
    }
}

function onError(error) {
    console.log(error);
}

function getData (data){
    let dataArray = [];
    let header = Object.getOwnPropertyNames(data[0]);

    dataArray.push(header);

    data.forEach (element =>{
        let data = [];
        for(let value in element){
            data.push(element[value])
        }
        dataArray.push(data)

    });
    return dataArray;
}