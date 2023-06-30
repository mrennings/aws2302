function exit(ret=255) {
    db.close();
    process.exit(ret);
    /*
     !   1 SIGHUP
     !  15 SIGINT
     ! 129 Datenbank-Table nicht erstellt
     ! 255 Unknown error
    */
}

// Express
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const hostname = "localhost";

// SQLIte
const db = require('better-sqlite3')('restaurants.db', { verbose: console.info });
//db.pragma('journal_mode = WAL');
// Table ersellen, wenn nicht vorhanden
 if (db.exec(`CREATE TABLE IF NOT EXISTS restaurants(
         id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         adresse TEXT NOT NULL,
         kategorie TEXT NOT NULL
         );`)) {
    console.log("Tabelle erstellt oder existiert bereits.");
} else {
    console.error("Konnte Datenbank nicht erstellen, beende …")
    exit(129);
}



const exists = (name) => {
    //const stmt = db.prepare(`SELECT * FROM restaurants WHERE name = '${name}';`);
    const stmt = db.prepare("SELECT * FROM restaurants WHERE name = ?;");
    return stmt.all(name).length != 0;
}

 //TODO testen
function delRestaurant(name) {
    let deleted = undefined;

    if (exists(name)) {
        deleted = db.prepare("SELECT * FROM restaurants WHERE name = ?;").get(name);
        db.prepare("DELETE FROM restaurants WHERE name = ?;").run(name);
    } 
    return deleted;
}

//TODO testen
/*
 ? return positiv interger:  number of changes
 ? return -1                 no changes
 */
function createRestaurant(name, adresse, kategorie) {
    if (!exists(name)) {
        const stmt = db.prepare("INSERT INTO restaurants (name, adresse, kategorie) VALUES (?, ?, ?);");
        const result = stmt.run([name, adresse, kategorie]);
        return result.changes;
    } else {
        return -1;
    }
}

// * Liste aller Restaurants
app.get('/restaurants', (_, res) => {
    res.send(db.prepare("SELECT * from restaurants;").all());
});

// TODO testen
// * Restaurant hinzufügen
app.post('/restaurant', (req,res) => {
    const r = req.body;
    if (r.name && r.adresse && r.kategorie) {
        if ( ! exists(r.name)) {
            if (createRestaurant(r.name, r.adresse, r.kategorie) != -1) {
                res.status(201);
                res.send(`Restaurant ${r.name} hinzugefügt`);
                console.log(`Restaurant hinzugefügt: ${r.name}, ${r.adresse}, ${r.kategorie}.`)
            }
        } else {
            res.status(418);
            res.send("Restaurant ist bereits in der Datenbank.");
        }
    } else {
        res.status(400);
        res.send("Daten unvollständig");
    }
});

// * Einzelnes Restaurant abfragen
app.get('/restaurant/:name', (req, res) => {

    const name = req.params.name;
    const result = db.prepare("SELECT * FROM restaurants WHERE name = ?;").get(name);

    if (result) {
        console.log(result);
        res.send(result);
    } else {
        console.log(`Restaurant »${name}« existiert nicht`);
        res.status(404)
        res.send(`Restaurant »${name}« existiert nicht`);
    }
});

// TODO testen
// * Restaurant aktualisieren
app.put('/restaurant/:name', (req, res) => {
    const name = req.params.name;
    if ( exists(name)) {
        const r = req.body;
        if ( r.name && r.adresse && r.kategorie) {
            delRestaurant(name);
            createRestaurant(r.name, r.adresse, r.kategorie);
            res.send(r);
            console.log(`Aktualisiere: ${req.params.name}: ${r.name}, ${r.adresse}, ${r.kategorie}.`);
        } else {
            res.status(400);
            res.send("Daten unvollständig, nicht aktualisiert.");
        }
    } else {
        res.status(404);
        res.send("Restaurant nicht gefunden.")
    }
});

// TODO testen
// * Restaurant löschen
app.delete('/restaurant/:name', (req,res) => {
    const name = req.params.name;

    const deleted = delRestaurant(name);
    if (deleted) {
        res.send(`${name} gelöscht`);
    } else {
        res.status(404)
        res.send(`${name} nicht gelöscht – nicht in der Datenbank?`);
    }
});


app.listen(port, hostname, () => {
    console.log(`Server listening on ${hostname}:${port}…`);
});

process.on('SIGINT', () => {
    console.log("SIGINT received …");
    exit(15);
});

process.on('SIGHUP', () => { 
    exit(1);
});