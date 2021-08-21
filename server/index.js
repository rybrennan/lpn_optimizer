const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

let app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(__dirname + '/../client/dist'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

https://stackoverflow.com/questions/39845526/how-to-serve-an-angular2-app-in-a-node-js-server