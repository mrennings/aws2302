const figlet = require('figlet');

console.log(
    figlet.textSync("Aufgabe 1", {
        font: "Dancing Font",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    })
);