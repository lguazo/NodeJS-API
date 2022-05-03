var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: 'The server is listening' })   
})

app.get('/health', function(req, res) {
  res.json({ status: 'OK' })   
})

app.listen(port)
console.log('The server is listening in the port ' + port)