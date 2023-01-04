
class Middleware {

    isLogged(req, res, next) {
        console.log(req.session.user)
        if(req.session.user) next()
        else res.json(false)
    }

    isAdmin(req, res, next) {
        console.log(req.session.user)
        if(req.session.user){
            if(req.session.user.role == 'admin') next()
            else res.json(false)
        }
        else res.json(false)
    }
}

module.exports = new Middleware()
