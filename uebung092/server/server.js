const express = require('express');
const cors = require('cors');
const api = require('./routes/api');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hallo von Express!');
});


app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});