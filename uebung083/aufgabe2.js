function bubblesort(arr) {

    let isSorted = false;

    while (! isSorted) {
        isSorted = true;
        for (let i=0 ; i<arr.length-1 ; i++) {
            if (arr[i] > arr[i+1]) {
                const tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                isSorted = false;
            }
        }
    }
    return arr;
}

// console.log("[1,2,3,4] => ", bubblesort([1,2,3,4]));
// console.log("[3,10,6,8,99] => ", bubblesort([3,10,6,8,99]));
// console.log("[1] => ", bubblesort([1]));
// console.log("[] => ", bubblesort([]));

// *Aufgabe 3
module.exports = bubblesort;