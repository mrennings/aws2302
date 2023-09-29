const http = require("http");
const os = require("os");

http
  .createServer((req, res) => {
    const dateTime = new Date(),
      load = os.loadavg(),
      doc = `<!DOCTYPE html>
            <html>
              <head>
                <title>Hallo Docker</title>
                <meta charset="utf-8" />
                <style>
                  body {
                      background-color: #083347;
                      color: white;
                      font-size: 2em;
                      margin: 2em;
                  }
                  img {
                    max-width: 10%;
                    margin: 10% 45%
                  }
                  
                  
                </style>
              </head>
              <body>
                  <div>
                    <h1>Hallo Docker</h1>
                    Serverzeit: ${dateTime}<br />
                    Serverauslastung (load): ${load[0]}<br/>
                  </div>
                  <img src="https://techstarter.de/wp-content/uploads/2021/09/techst_logo_rz_white.svg" />

              </body>
            </html>`;
    res.setHeader("Content-Type", "text/html");
    res.end(doc);
  })
  .listen(5678);
