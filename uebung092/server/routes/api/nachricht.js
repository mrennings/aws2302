const express = require('express')
const router = express.Router()
let motd = "Nachricht des Tages";


router.get('/', (req, res) => {
    console.log('GET /api/nachricht ', req.ip);
    res.json({ nachricht: motd });
});

router.post('/update', (req, res) => {
    console.log('POST /api/nachricht/update ', req.ip);
    // console.log("/update: ", req.body.motd);
    motd = req.body.motd;
    res.json({ nachricht: motd });
});

module.exports = router