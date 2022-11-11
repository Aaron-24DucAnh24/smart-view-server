// compulsory library
const express = require('express')

const app = express()
var server = require("http").createServer(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is the smart-view, an web-based application')
})

server.listen(port)
console.log('--> Run successfully')
