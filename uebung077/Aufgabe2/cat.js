if (process.argv.length < 3) {
    throw new Error("Es muss mindestens eine Datei angegeben werden.");
}

const fs = require('fs');

const name = process.argv[1].replace(/^.*\/(.*)$/, "$1"); // remove path
const files = process.argv.slice(2);

files.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(fs.readFileSync(file).toString());
    } else {
        console.error(`${name}: ${file}: Datei nicht gefunden`);
        /*
         ? Ich weiß, dass die Aufgabe 1.1 sagt, man soll das Programm hier
         ? mittels process.exit(1) beenden, aber ich bevorzuge das Verhalten von
         ? `cat`, eine Fehlermeldung auszugeben und mit der nächsten Datei
         ? weiterzumachen
        */ 
    }
});
