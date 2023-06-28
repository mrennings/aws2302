const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;
const hostname = "localhost";

/*
 ? restaurants = [
 ?   {
 ?     "name": "Restaurant-Name",
 ?     "adresse": "Restaurant-Adresse",
 ?     "kategorie": "Restaurant-Kategorie"
 ?   }
 ? ]
*/
//let restaurants = [];
let restaurants = [
    {
        name : "Bob's Burgers",
        adresse : "Zum Burgerladen 1, 12345 Burgerhausen",
        kategorie : "Burgerbude"
    },
    {
        name: "Testaurante",
        adresse: "Teststr. 1, 12345 Testhausen",
        kategorie: "Test"
    },
    {
        name: "Testaurant",
        adresse: "Teststr. 1, 12345 Testhausen",
        kategorie: "Test"
    }
];

const exists = (name) => {
    let result = restaurants.find((elem) => {
        if (elem.name == name) {
            return true;
        }
    });

    // if (result) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    return result != undefined
}

function getIndex(name) {
    let index = -1;
    for (let i=0 ; i<restaurants.length ; i++) {
        if (restaurants[i].name == name) {
            index = i;
        }
    }
    return index;
}

function delRestaurant(name) {
    const index = getIndex(name);
    let deleted = undefined;
    if (index != -1) {
        deleted = restaurants.splice(index,1);
    }
    return deleted;
}

function createRestaurant(neu) {
    restaurants.push(neu);
}

// * Liste aller Restaurants
app.get('/restaurants', (_, res) => {
    res.send(restaurants);
});

// * Restaurant hinzufügen
app.post('/restaurant', (req,res) => {
    const r = req.body;
    if (r.name && r.adresse && r.kategorie) {
        if ( ! exists(r.name)) {
            restaurants.push(r);
            res.status(201);
            res.send("Restaurant hinzugefügt");
            console.info(`Restaurant hinzugefügt: ${r.name}, ${r.adresse}, ${r.kategorie}.`)
        } else {
            res.status(418);
            res.send("Restaurant ist bereits gespeichert.");
        }
    } else {
        res.status(400);
        res.send("Daten unvollständig");
    }
});

// * Einzelnes Restaurant abfragen
app.get('/restaurant/:name', (req, res) => {
    let result = undefined;
    restaurants.forEach((elem) => {
        if (elem.name == req.params.name) {
            result = elem;
        }
    });
    
    if (result) {
        res.send(result);
    } else {
        res.sendStatus(404);
        res.send("Restaurant existiert nicht.");
    }
});

// * Restaurant aktualisieren
app.put('/restaurant/:name', (req, res) => {
    const name = req.params.name;
    if ( getIndex(name) != -1) {
        const r = req.body;
        if ( r.name && r.adresse && r.kategorie) {
            delRestaurant(name);
            createRestaurant(r)
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

// * Restaurant löschen
app.delete('/restaurant/:name', (req,res) => {
    const name = req.params.name;

    if (getIndex(name) != -1) {
        const deleted = delRestaurant(name);
        res.send(deleted);
        console.log(`${name} gelöscht: ${JSON.stringify(deleted)}`);
    } else {
        res.status(404);
        res.send(`Restaurant »${name}« nicht gefunden.`);
    }
});


app.listen(port, hostname, () => {
    console.log(`Server listening on ${hostname}:${port}…`);
});