
const router = require('express').Router()
const usersController = require('../controller/users')
const middleware = require('../middleware')

router.post('/login', usersController.login)
router.post('/signIn', usersController.signIn)
router.get('/logout', middleware.isLogged, usersController.logout)
router.get('/all', usersController.all)

module.exports = router
