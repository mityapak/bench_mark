export class arrayScan {
    constructor(){
        this.array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    };
    static for (){
        let array = this.array
        for(let i = 1; i < array.length; i++){
            let num = array[i];
        }
    };
    static forOf(){
        let array = this.array
        for (let value of array) {
            let num = value;
        }
    };
    static while (){
        let array = this.array
        let i = 0;
        while (i < array.length){
            let num = array[i];
            i++;
        }
    };
}