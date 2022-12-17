
const connect  = require('../model/config')
const colName  = 'users'

class UsersController 
{
    login(req, res) {
        connect(colName, login, req)
        .then(data => {
            req.session.user = data
            req.session.save()
            res.json(data)
        })
        .catch(err => res.json({err: err}))
    }

    signIn(req, res) {
        connect(colName, signIn, req)
            .then(data => res.json(data))
            .catch(err => res.json({err: err}))
    }

    logout(req, res) {
        req.session.user = null
        req.session.save()
        res.json(true)
    }

    all(req, res) {
        connect(colName, all)
            .then(data => res.json(data))
            .catch(err => res.json({err: err}))
    }
}

module.exports = new UsersController

async function all(collection) {
    var result = await collection.find({}).toArray()
    return result
}

async function login(collection, req) {
    // query
    var result = await collection.findOne({
        loginName: req.body.loginName,
        password: req.body.password,
    })

    // not found
    if(!result) return null

    // found
    console.log('--> 1 record was accessed!')
    return {
        _id: result._id,
        fname: result.fname,
        lname: result.lname,
        avatar: result.avatar,
        role: result.role,
    }
}

async function signIn(collection, req) {
    // query
    var result = await collection.findOne({
        loginName: req.body.loginName,
        password: req.body.password,
    })

    // not found
    if(!result) {
        req.body.role = 'member'
        await collection.insertOne(req.body)
        console.log('--> 1 record was inserted!')
        return 1
    }

    // found
    return 0
}
