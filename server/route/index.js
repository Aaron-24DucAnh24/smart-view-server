
const UsersRouter = require('./users')
const PostsRouter = require('./posts')
const AdminRouter = require('./admin')

function route(app) 
{
    app.use('/users', UsersRouter)
    app.use('/posts', PostsRouter)
    app.use('/admin', AdminRouter)
} 

module.exports = route