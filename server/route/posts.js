
const router = require('express').Router()
const postsController = require('../controller/posts')
const middleware = require('../middleware')

router.get('/preview', middleware.isLogged, postsController.preview)

module.exports = router
