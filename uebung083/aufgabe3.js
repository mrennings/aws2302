const bubblesort = require('./aufgabe2.js');

const array1 = [4, 98, 2, 0, 2, 87, 1];
const array2 = [9, 3, 2, 4, 100, 5];

const mergeArrayUnique = (arr1, arr2) => {
    return [...new Set(arr1.concat(arr2))];
}


const mergedArr = mergeArrayUnique(array1, array2);
const sorted = bubblesort(mergedArr);

console.log("Array1: ", array1);
console.log("Array2: ", array2);
console.log("Merged: ", mergedArr);
console.log("Sorted: ", sorted);