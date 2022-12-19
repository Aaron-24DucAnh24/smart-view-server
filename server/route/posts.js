
const router = require('express').Router()
const postsController = require('../controller/posts')
const middleware = require('../middleware')

router.get('/preview', postsController.preview)
router.get('/:postID', postsController.detail)

module.exports = router
