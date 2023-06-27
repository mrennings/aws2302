const express = require('express');
const app = express();
const { v4: uuidv4} = require('uuid');
const xmljs = require('xml-js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const hostname = 'localhost';
const port = 3000;


app.all('/status/:code', (req, res) => {
    res.sendStatus(parseInt(req.params.code));
});

app.all('/method', (req, res) => {
    res.send(req.method);
});


app.get('/uuid', (req, res) => {
    res.send(uuidv4());
});

app.get('/user-agent', (req, res) => {
    res.send(req.get('user-agent'));
});

app.get('/headers', (req, res) => {
    res.send(req.headers);
});

app.get('/url', (req, res) => {
    res.send(req.url);
});

app.get('/json', (req, res) => {
    const user = {
        name: 'John',
        isMarried: false,
        age: 25,
        uuid: uuidv4()
    };
    res.send(JSON.stringify(user));
});

app.get('/xml', (req, res) => {
    const user = {
        name: 'Jack',
        isMarried: false,
        age: 25,
        uuid: uuidv4()
    };
    res.type('application/xml');
    res.send(xmljs.js2xml(user, { compact: true, spaces: 4 }));
});

app.get('/formdata', function (req, res) {
    res.send(`
      <html>
      <head>
        <title>Formular</title>
      </head>
      <body>
        <h1>Formular</h1>
        <form action="/formdata" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <label for="age">Alter:</label>
          <input type="number" id="age" name="age" required><br><br>
          <input type="submit" value="Absenden">
        </form>
      </body>
      </html>
    `);
});

app.post('/formdata', (req, res) => {
    console.log(`Formulardaten: Name: ${req.body.name}, Alter: ${req.body.age}`);
    console.log(req.body);
    console.log(`Formdata: ${req.body.toString()}`);     // ! funktioniert nicht!
    console.log("Mit plus " + req.body);      // ! funktioniert auch nicht!
    console.log(`JSON: ${JSON.stringify(req.body)}`);
    res.send("Daten erfolgreich übertragen.");
    //process.stdout.write(req.body);
})

app.listen(port, hostname, () => {
    console.log(`Server up and listening on ${hostname}:${port}…`);
})