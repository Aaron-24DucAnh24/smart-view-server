
const express = require('express')
const route   = require('./route/index')
const session = require('express-session')
const cors    = require('cors')
const form    = require('multer')()

const app     = express()
var server    = require("http").createServer(app)
const port    = process.env.PORT || 3000

app.use(cors({credentials: true, origin: true}))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}))
app.use(form.array())
app.set('trust proxy', 1)
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
