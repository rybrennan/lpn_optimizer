const express = require('express')
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express()
const port = 4000

// let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static(__dirname + '/../dist'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const html = __dirname + '/dist/';

app
    .use(compression())
    .use(bodyParser.json())
    // Static content
    .use(express.static(html))
    // Default route
    .use(function(req, res) {
      res.sendFile(html + 'index.html');
    })
    // Start server
    .listen(port, function () {
        console.log('Port: ' + port);
        console.log('Html: ' + html);
    });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

//https://stackoverflow.com/questions/39845526/how-to-serve-an-angular2-app-in-a-node-js-server