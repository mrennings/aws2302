const chalk = require('chalk');

const summe = (z1, z2) => {
    console.log(chalk.blue(`Zahl 1: ${z1}, Zahl 2: ${z2}, Summe: ${z1 + z2}.`), chalk.green(" Name: Markus"));
    /* 
     ! Keine Ahnung, ob ich die Aufgabe so richtig verstanden habe.
     ! Ganz ehrlich, ich versteh die Aufgabe nicht komplett: »schreibe eine Funktion
     ! die die Summe aus zwei zahlen als Argumente nimmt […] + Konsol logge deinen 
     ! Namen«
    */
}

module.exports = { summe };