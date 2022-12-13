
const express = require('express')
const route   = require('./route/index')

const app = express()
var   server = require("http").createServer(app);
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route(app)

server.listen(port)
console.log('Server created !')
