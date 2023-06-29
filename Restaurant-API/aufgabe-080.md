# Aufgabe

Erweitere die Express-API für Restaurants von gestern, sodass die Daten in einer
Datenbank gespeichert werden. Du hast die Wahl zwischen MongoDB, Amazon RDS
oder SQLite als Datenbanklösung. Wenn du MongoDB oder Amazon RDS verwenden möchtest,
erstelle zuerst eine Datenbank. Andernfalls kannst du das SQLite-Modul installieren
und verwenden.

Falls du von einer frischen Codebasis aus starten willst, kannst du dieses Repository
klonen/forken: <https://github.com/martindubb/restaurants-api>

## Vorgehen

1. Installiere die erforderlichen Abhängigkeiten für die Datenbankintegration (entweder
`mongodb` für MongoDB oder `sqlite3` für SQLite oder `mysql` für Amazon RDS).

2. Stelle eine Verbindung zur ausgewählten Datenbank her.

3. Erstelle die erforderlichen Tabellen oder Sammlungen in der Datenbank, um die
Restaurantdaten zu speichern.

4. Passe die API-Endpunkte an, damit die Restaurantdaten nicht mehr im globalen
Array gespeichert werden, sondern in der ausgewählten Datenbank.

5. Aktualisiere den POST-Endpunkt, um die eintreffenden Restaurantdaten in die Datenbank
einzufügen.

6. Ändere den GET-Endpunkt, um die Restaurantdaten aus der Datenbank abzurufen und
an den Client zurückzugeben.

7. Passe den DELETE-Endpunkt an, um das entsprechende Restaurant aus der Datenbank
zu löschen.

8. Überprüfe und aktualisiere den PUT-Endpunkt, um ein vorhandenes Restaurant in der
Datenbank zu aktualisieren.

9. Stelle sicher, dass die API ordnungsgemäß mit der ausgewählten Datenbank kommuniziert
und die CRUD-Operationen korrekt ausgeführt werden.

## Hilfen

Für **MongoDB:**

- Tutorial: "Getting Started with MongoDB and Node.js" von MongoDB: <https://docs.mongodb.com/drivers/node/current/fundamentals/>

- MongoDB npm-Modul: <https://www.npmjs.com/package/mongodb>

- MongoDB-Dokumentation: <https://docs.mongodb.com/>

- MongoDB CRUD Operation: <https://www.mongodb.com/docs/guides/#crud>

Für **SQLite:**

- Tutorial: "Using SQLite with Node.js" von SQLitetutorial.net: <https://www.sqlitetutorial.net/sqlite-nodejs/>

- SQLite npm-Modul: <https://www.npmjs.com/package/sqlite3>

- SQLite-Dokumentation: <https://www.sqlite.org/docs.html>

Für **Amazon RDS:**

- Amazon RDS Doku <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html>
