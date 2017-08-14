export default class Results {
    constructor (){
        this.intermediateResults = [];
        this.resultsCollection =[];
    };

    saveResult (result, runCount){
        let everageResult =  this.getEverageResult (result, runCount);
        if (everageResult){
            this.resultsCollection.push(everageResult)
        }
    };

    getEverageResult (result, runCount){
        let IntermediateResult = this.saveIntermediateResult(result, runCount);
        if (IntermediateResult){
            let methodDescription = '';
            let rss = 0;
            let heapTotal = 0;
            let heapUsed = 0;
            let time = 0;
            IntermediateResult.forEach(element => {
                methodDescription = element.methodDescription;
                rss = rss + element.rss;
                heapTotal = heapTotal + element.heapTotal;
                heapUsed = heapUsed + element.heapUsed;
                time = time + element.time;
            });
            rss = rss/runCount;
            heapTotal = heapTotal/runCount;
            heapUsed = heapUsed/runCount;
            time = time/runCount;
            this.intermediateResults = [];
            return {methodDescription, rss, heapTotal, heapUsed, time}
        }
    };


    saveIntermediateResult(result, runCount){
        this.intermediateResults.push(result);

        if (this.intermediateResults.length === runCount){
            return this.intermediateResults;
        }
        return false;
    };

}