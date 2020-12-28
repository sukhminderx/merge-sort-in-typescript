export class MergeSort {

    constructor(val: Array<number>) {
        console.log(val);
        console.log(this.sort(val));
    }
    
    sort(a: Array<number>): any {
        let size = a.length;
        if(size==1) return a;

        const left = a.splice(0, Math.floor(size/2));
        return this.merge(this.sort(left), this.sort(a));
    }

    merge(left: Array<number>, right: Array<number>) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    }

}