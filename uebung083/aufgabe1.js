let zeit = parseInt(process.argv[2]) || 60;
const sprintf = require("sprintf-js").sprintf;

/* 
 ! Da der erste Aufruf der Funktion erst nach 1 Sekunde (bzw. »delay« in
 ! setInterval) geschieht, die erste Sekunde der angegebenen Zeit direkt abziehen:
*/
console.log(sprintf('Noch %4d Sekunden', zeit));
zeit--;


const timer = setInterval(() => {
    console.log(sprintf('Noch %4d Sekunden', zeit));
    zeit--;
    if (zeit == 0) {
        clearInterval(timer);
    }
}, 1000);