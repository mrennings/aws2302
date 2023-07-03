const stadt = process.argv[2]
if (! stadt) {
    console.error("Es muss eine Stadt angegeben werden!");
    process.exit(1);
}

const axios = require('axios');
//console.log(axios.isCancel('something'));

const {cred} = require('./OWM.cred');
// Doku: https://openweathermap.org/current
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${stadt}&APPID=${cred.api_key}&units=metric&lang=de`;

const richtung = {
     0: "Norden",
     1: "Nordnordosten",
     2: "Nordosten",
     3: "Ostnordosten",
     4: "Osten",
     5: "Ostsüdosten",
     6: "Südosten",
     7: "Südsüdosten",
     8: "Süden",
     9: "Südsüdwesten",
    10: "Südwesten",
    11: "Westsüdwesten",
    12: "Westen",
    13: "Westnordwesten",
    14: "Nordwesten",
    15: "Nordnordwesten"
};

function parseResponse(r) {
    // TODO Windrichtung in Himmelsrichtung anzeigen
    const dir = parseInt((r.wind.deg + 11.5) / 22.5);
    // TODO Sichtweite: Max-Wert 10000m
    // ! Timestamps: es werden nur 10 Stellen angegeben, nicht 13 (Sek statt ms)
    console.log(`Das Wetter in ${r.name}, ${r.sys.country} (${r.coord.lat} N, ${r.coord.lon} E):\n
        ${r.weather[0].description}
        Temperatur: ${r.main.temp}°C (Gefühlt: ${r.main.feels_like}°C)
        (Zur Zeit gemessener Höchstwert: ${r.main.temp_max}°C, Tiefstwert: ${r.main.temp_min}°C)
        Luftdruck: ${r.main.pressure} hPa
        Luftfeuchtigkeit: ${r.main.humidity} %
        Sichtweite: ${r.visibility/1000} km
        Wind: ${r.wind.speed} m/s (in Böen ${r.wind.gust} m/s) aus ${richtung[dir]} (${r.wind.deg}°)
        Wolken: ${r.clouds.all} % Bedeckung

        Sonnenaufgang: ${new Date(r.sys.sunrise * 1000).toLocaleTimeString()}, 
        Sonnenuntergang: ${new Date(r.sys.sunset * 1000).toLocaleTimeString()} 

        (Daten von ${new Date(r.dt * 1000).toLocaleTimeString()})
    `)
}

axios.get(URL)
    .then((response) => {
        parseResponse(response.data);
    })
    .catch((err) => {
        console.error(err);
    });