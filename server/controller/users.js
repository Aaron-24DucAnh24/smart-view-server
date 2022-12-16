
const connect  = require('../model/config')
const colName  = 'users'

class UsersController 
{
    login(req, res) {
        connect(colName, login, req.body)
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    signIn(req, res) {
        connect(colName, signIn, req.body)
            .then(data => res.json(data))
            .catch(err => res.json({err: err}))
    }

    logout(req, res) {
        req.session.user = null
        req.session.save()
        res.json(true)
    }

    test(req, res) {
        connect(colName, test)
            .then(data => res.json(data))
            .catch(err => res.json({err: err}))
    }
}

module.exports = new UsersController

async function test(collection) {
    var result = await collection.find({}).toArray()
    return result
}

async function login() {

}

async function signIn() {

}