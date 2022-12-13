
const router = require('express').Router()
const usersController = require('../controller/users')

router.get('/test', usersController.test)

module.exports = router
