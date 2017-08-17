


export default sortMethods = {
    array: [5, 9, 4, 2, 10, 1, 6, 3, 8, 7],
    bubbleSort: function (){
        for (let i = 0; i < this.array.length; i++){
             for (let j = 0; j < this.array.length-1-i; j++){
                if (this.array[j+1] < this.array[j]){
                     let t = this.array[j+1];
                     this.array[j+1] = this.array[j];
                     this.array[j] = t; }
             }
        }
    },

    selectionSort: function (){
        for (let i = 0; i < this.array.length-1; i++){
            let min = i;
            for(let j = i+1; j < this.array.length; j++){
                if(this.array[j] < this.array[min])
                    min = j;
            }
            let t = this.array[min];
            this.array[min] = this.array[i];
            this.array[i] = t;
        }
    },

    insertionSort: function (){
        for (let i = 0; i < this.array.length; i++){

            let t = this.array[ i ], j = i-1;

            while (j >= 0 && this.array[j] > t){
                this.array[j+1] = this.array[j];
                j--;
            }

            this.array[j+1] = t;
        }
    },

    shellSort: function (){
        let i = Math.floor(n/2);
        while (i > 0){
            for (let j = 0; j < this.array.length; j++){

                let k = j, t = this.array[j];
                while (k >= i && this.array[k-i] > t){
                    this.array[k] = this.array[k-i]; k -= i;
                }
                this.array[k] = t;
        }
            i = (i==2) ? 1 : Math.floor(i*5/11);
        }
    },

    simpleCountingSort: function (){

        let Count = [], arr = [];
        for (let i = 0; i < this.array.length; i++) Count[ i ] = 0;
        for (let i = 0; i < this.array.length-1; i++){
            for (let j = i+1; j < this.array.length; j++){
                if (this.array[ i ] < this.array[j]) Count[j]++;
                else Count[ i ]++;
            }
        }
        for (let i = 0; i < this.array.length; i++) arr[Count[ i ]] = this.array[ i ];
        
    },

}