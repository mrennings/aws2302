// * Aufgabe 2.2
// https://blog.logrocket.com/guide-promises-node-js/
function waitForFive() {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 5000);
    });
    return prom;
}


// * Aufgabe2.3
(async function asyncCaller() {
    const result = await waitForFive();
    console.log("Aufgabe 2.3, async: ", result);
})();


// * Aufgabe 2.4
function sleep(time) {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
    return prom;
}
(async function () {
    await sleep(500); // 500ms warten
    console.log("Aufgabe 2.4");
})();


// * Aufgabe 2.5
function callback() {
    console.log("Aufgabe 2.5: im Callback");
}

function waitForFive2(callback) {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
        }, 5000);
    });
}
waitForFive2(callback);