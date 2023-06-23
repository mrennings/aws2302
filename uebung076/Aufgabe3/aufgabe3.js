const zahlen = [7, 2, 0, 11, 4, 100, 25];

console.log(`Sortiert: ${zahlen.sort((a, b) => a - b)}`);

/*
 * Es funktioniert nicht out-of-the-box, weil .sort() alphabetisch
 * sortiert, somit wäre 25 größer als 100, weil 2 > 1
 */