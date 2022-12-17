
const router = require('express').Router()
const usersController = require('../controller/users')
const middleware = require('../middleware')

router.get('/all', usersController.all)
router.post('/login', usersController.login)
router.post('/signIn', usersController.signIn)
router.get('/logout', middleware.isLogged, usersController.logout)

module.exports = router
