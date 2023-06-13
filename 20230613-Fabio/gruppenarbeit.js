// 1 -----------------------------
function wordlength(wort) {
    return wort.length;
}
console.log("1: " + wordlength("Hallo"));

// 2  --------------------------------
function summe(arr) {
    let sum = 0;
    for (let i=0 ; i<arr.length ; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("2: " + summe([0, 1, 2, 3]));

// 3 -----------------------------

function findMax(arr) {
    return Math.max(...arr);
}

console.log("3: " + findMax([4, 5, 1, 9]));

// 4 ---------------------------------
function anzVokale(word) {
    return word.match(/[aeiou]/gi).length;
}
console.log("4: " + anzVokale("Hallo"));

// 5 -----------------------------------------
function anzWorte(satz) {
    return satz.split(" ").length;
}
console.log("5: " + anzWorte("Dies ist ein Test"));

// 6 ----------------------------------------
function isPalindrom(wort) {
    wort = wort.toLowerCase().replace(/[\W_]/g, '');
    let rev = wort.split('').reverse().join('');
    return rev === wort;
}
console.log("6: " + isPalindrom("Otto"));
console.log("6: " + isPalindrom("keinPalindrom"));