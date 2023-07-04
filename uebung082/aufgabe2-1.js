// Schreibe die folgende sum Funktion so um, dass anstelle von console.log eine
// Callback-Funktion aufgerufen wird.

function sum(a, b) {
    const summe = a + b;
    console.log(summe);
}

// Die neue Funktion sollte so aussehen!
function sumNeu(a, b, callback) {
    const summe = a + b;
    callback(summe);
    // console.log(summe); // Diese Zeile muss angepasst werden
}

function sumCallbackFunction(ergebnis) {
    console.log("Das Ergebnis ist: ", ergebnis);
}

sumNeu(1, 2, sumCallbackFunction);
// Das Ergebnis ist: 3