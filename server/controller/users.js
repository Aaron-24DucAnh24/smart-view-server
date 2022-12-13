
const connect  = require('../model/config')
const usersAPI = require('../model/usersAPI')
const colName  = 'users'

class UsersController 
{
    test(req, res) {
        connect(colName, usersAPI.test)
            .then(data => res.json(data))
            .catch(err => res.json({err: err}))
    }
}

module.exports = new UsersController
