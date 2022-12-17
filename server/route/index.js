
const UsersRouter = require('./users')
const PostsRouter = require('./posts')

function route(app) 
{
    app.use('/users', UsersRouter)
    app.use('/posts', PostsRouter)
} 

module.exports = route