export default class Results {
    constructor() {
        this.resultsCollection = [];
    };

    async saveEverageResult(intermediateResult, runCount) {
        return new Promise((resolve, reject) => {
            if (intermediateResult) {
                let methodDescription = '';
                let rss = 0;
                let heapTotal = 0;
                let heapUsed = 0;
                let time = 0;

                intermediateResult.forEach(element => {

                    methodDescription = element.methodDescription;
                    rss = rss + element.rss;
                    heapTotal = heapTotal + element.heapTotal;
                    heapUsed = heapUsed + element.heapUsed;
                    time = time + element.time;

                });

                rss = rss / runCount;
                heapTotal = heapTotal / runCount;
                heapUsed = heapUsed / runCount;
                time = time / runCount;

                this.resultsCollection.push({methodDescription, rss, heapTotal, heapUsed, time})
            }
            resolve();
        });
    };

}