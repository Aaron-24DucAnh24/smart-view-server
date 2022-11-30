
const express = require('express')
const session = require('express-session')
const route   = require('./src/route/index.route')

const app = express()
var   server = require("http").createServer(app);
const port = process.env.PORT || 2222;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'session', 
    resave: false, 
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 24 * 1000
    }
}))

route(app)

server.listen(port)
console.log('Server created !')
