

class Middleware {

    isLogged(req, res, next) {
        if(req.session.user) next()
        else res.json(false)
    }

}

module.exports = new Middleware()
