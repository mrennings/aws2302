const db = require('better-sqlite3')('restaurants.db', { verbose: console.log });
//db.pragma('journal_mode = WAL');
if (db.exec(`CREATE TABLE IF NOT EXISTS restaurants(
         id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         adresse TEXT NOT NULL,
         kategorie TEXT NOT NULL
         );`)) {
    console.log("Tabelle erstellt oder existiert bereits.");
} else {
    console.error("Konnte Datenbank nicht erstellen, beende …")
    process.exit(1);
}

db.exec("INSERT INTO restaurants (name, adresse, kategorie) VALUES ( 'Bobs Burger', 'Zum Burgerladen 1, 12345 Burgerhausen', 'Burgerbude' );");
db.exec("INSERT INTO restaurants (name, adresse, kategorie) VALUES ('Annelieses Pizzabude', 'Pizzaplatz 1, 54321 Pizzahausen', 'Italiener');");
db.close();