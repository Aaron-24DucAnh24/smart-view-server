
class Middleware {

    isLogged(req, res, next) {
        if(req.session.user) next()
        else res.json(false)
    }

    isAdmin(req, res, next) {
        if(req.session.user){
            if(req.session.user.role == 'admin') next()
            else res.json(false)
        }
        else res.json(false)
    }
}

module.exports = new Middleware()
