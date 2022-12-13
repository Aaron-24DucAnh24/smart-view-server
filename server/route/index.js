
const UsersRouter = require('./users')

function route(app) 
{
    app.use('/users', UsersRouter)
} 

module.exports = route