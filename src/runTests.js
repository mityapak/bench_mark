import {getTestObject} from './testCollection';

function runTest() {
    try {
        process.on("message",async ({fileName, methodName,iterrationCount}) => {
            let objectTest = await getTestObject(fileName)
            let startTime = new Date().getTime();
            for (let i = 0; i < iterrationCount; i++) {
                objectTest[methodName];
            }

            let endTime = new Date().getTime();
            let endProcess = process.memoryUsage();
            let {rss, heapTotal, heapUsed, time} = compile(endProcess, startTime, endTime);
            process.send({
                type: 2, data: {
                    methodDescription: methodName,
                    rss,
                    heapTotal,
                    heapUsed,
                    time
                }
            });

            process.exit(0);
        });
        process.on('uncaughtException', (error) => {
            process.send({
                type: 3,
                data: error
            });
        });
        process.send({type: 1, state: "ready"});
    }
    catch (error) {
        console.log(error.message)
    }

}


try {
    runTest();
} catch (err) {
    console.log(err);
    console.log(err.message)
}


function compile(endProcess, startTime, endTime) {
    return {
        rss: endProcess.rss,
        heapTotal: endProcess.heapTotal,
        heapUsed: endProcess.heapUsed,
        time: endTime - startTime
    }
}

