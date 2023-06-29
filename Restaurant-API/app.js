function exit(ret=0) {
    db.close();
    process.exit(ret);
    /*
     !  1 Datenbank-Table nicht erstellt
     ! 15 SIGINT
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
    exit(1);
}



const exists = (name) => {
    const stmt = db.prepare(`SELECT * FROM restaurants WHERE name = '${name}';`);
    return stmt.all().length != 0;
}

 //TODO testen
function delRestaurant(name) {
    let deleted = undefined;

    if (exists(name)) {
        const stmt = db.prepare(`SELECT * FROM restaurants WHERE name = '${name}';`);
        deleted = stmt.all();
        db.exec(`DELETE FROM restaurants WHERE name = '${name}';`);
    } 
    return deleted;
}

//TODO testen
function createRestaurant(name, adresse, kategorie) {
    if (!exists(name)) {
        const stmt = db.prepare(`INSERT INTO restaurants (name, adresse, kategorie) VALUES ('${name}', '${adresse}', '${kategorie}');`);
        const result = stmt.run();
        return result.changes;
    } else {
        return -1;
    }
}

// * Liste aller Restaurants
app.get('/restaurants', (_, res) => {
    const stmt = db.prepare("SELECT * from restaurants;");
    res.send(stmt.all());
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

    const stmt = db.prepare(`SELECT * FROM restaurants WHERE name = '${req.params.name}';`);
    const result = stmt.all();

    if (result.length != 0) {
        console.log(result);
        res.send(result);
    } else {
        console.log(`Restaurant »${req.params.name}« existiert nicht`);
        res.status(404)
        res.send(`Restaurant »${req.params.name}« existiert nicht`);
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

    // if (exists(name)) {
    //     db.run(`DELETE FROM restaurants WHERE name = '${name}'`);
    //     res.send(`${name} gelöscht.`)
    // } else {
    //     res.status(404);
    //     res.send(`${name} ist nicht in der Datenbank`);
    // }
});


app.listen(port, hostname, () => {
    console.log(`Server listening on ${hostname}:${port}…`);
});

process.on('SIGINT', () => {
    console.log("SIGINT received …");
    exit(15);
});