# Aufgabe

Erweitere den Express-Server vom Vormittag um weitere Endpunkte!
Wenn kein Server-Grundgerüst zur Verfügung steht, nimm das von hier:
<https://www.npmjs.com/package/express>

## HTTP-Methode GET

- `/uuid`
  <br>Gibt eine neu erzeugte UUIDv4 zurück.
  
- `/user-agent`
  <br>Gibt den User-Agent zurück, mit dem der Server angefragt wurde.

- `/headers`
  <br>Gibt alle HTTP-Header-Felder als JSON-Objekt zurück, die zum Server gesendet
  wurden.
- `/url`
  <br>Gibt die aufgerufene URL zurück, die angefragt wurde.
- `/json`
  <br>Gibt ein kleines JSON-Objekt zurück, bspw:

  ```json
  { “person”: { 
      “name”: ”John”, 
      “age”: 30 
    }
  }
  ```
  
- `/xml`
  <br>Gibt ein kleines XML-Objekt zurück, bspw:

  ```xml
  <person>
    <name>John</name>
    <age>30</age>
  </person>
  ```

## HTTP-Methode POST

Erstelle ein HTML-Formular mit mindestens den Feldern “Name” und “Alter” und
schicke es an den HTTP-Server zum Endpunkt /formdata.

- `/formdata`
  <br>Dieser Endpunkt empfängt die Daten aus dem Formular und gibt sie auf der 
  Konsole wieder aus.
 
## Hilfen
Express Framework: <https://www.npmjs.com/package/express>; <https://github.com/expressjs/express/tree/master/examples>

UUIDv4: <https://www.npmjs.com/package/uuid>

HTTP-Methoden: <https://wiki.selfhtml.org/wiki/HTTP/Anfragemethoden>

HTTP-Statuscodes: <https://wiki.selfhtml.org/wiki/HTTP/Statuscodes>
