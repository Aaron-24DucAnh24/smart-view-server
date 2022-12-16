

class Middleware {

    isLogged(req, res, next) {
        if(req.session.user) next()
        else res.json({err: "Not authenticated!"})
    }

}

module.exports = new Middleware()
