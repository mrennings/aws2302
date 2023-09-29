const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

let file = './mylogfile.log';
if (process.env.LOGFILE) {
  file = process.env.LOGFILE;
}

var logFile = fs.createWriteStream(file, { flags: 'a' });
logFile.write('Logfile started\n');

const app = express();

let input = 'Beispieltext';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <section>
          <h2>Testeingabe</h2>
          <h3>${input}</h3>
        </section>
        <form action="/Eingabe" method="POST">
          <div class="form-control">
            <label>Eingabe: </label>
            <input type="text" name="goal">
          </div>
          <button>Eingabe hinzufügen</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/Eingabe', (req, res) => {
  const eingabeText = req.body.goal;
  console.log(eingabeText);
  logFile.write(eingabeText + '\n');
  input = eingabeText;
  res.redirect('/');
});

app.listen(8080);
