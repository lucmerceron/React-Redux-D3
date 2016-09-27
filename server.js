'use strict';

let express = require('express'),
  path = require('path'),
  packageJson = require('./package.json'),
  port = 8080,
  app = new express()

/* Configuration */
app.use(express.static(path.join(__dirname, 'public')))

/* return the version of the web */
app.get('/version', (req, res) => {
  res.send(packageJson.version)
})

/* Return static HTML at call */
app.get('*', (req, res) => {
  res.send(renderFullPage())
})

function renderFullPage() {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React-Redux-D3</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/css/bootstrap.css">
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="stylesheet" href="/font/lato.css">
      </head>
      <body>
        <div id="app"></div>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port, function(error) {
  if (error) {
    console.log(error)
  } else {
    console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
