import * as config from "./config";
console.log("forked.");

function run() {
    process.on('uncaughtException', (error) => {
        process.send({
            type: 3,
            data: error
        });
    });

    process.on("message", ({methodObject, element}) => {
        console.log("received.");
        let methodName = element;
        let startTime = new Date().getTime()
        let start = process.memoryUsage();

        for (let i = 0; i < config.iterationCount; i++) {
            methodObject[methodName];
        }

        let end = process.memoryUsage();
        let endTime = new Date().getTime();

        let methodDescription = methods.Methods[methodName].description;
        let {rss, heapTotal, heapUsed, time} = compile(start, end, startTime, endTime);

        process.send({
            type: 2, data: {
                methodDescription,
                rss,
                heapTotal,
                heapUsed,
                time
            }
        });

        process.exit(0);
    });
    console.log("sent.");
    process.send({type: 1, state: "ready"});
}

run();

function compile(start, end, startTime, endTime) {
    return {
        rss: end.rss - start.rss,
        heapTotal: end.heapTotal - start.heapTotal,
        heapUsed: end.heapUsed - start.heapUsed,
        time: endTime - startTime
    }
}
