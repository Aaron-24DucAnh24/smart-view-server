
const router = require('express').Router()
const postsController = require('../controller/posts')
const middleware = require('../middleware')

router.get('/preview', postsController.preview)
router.get('/:postID', postsController.getPost)
router.put('/:postID', middleware.isLogged, postsController.putPost)
router.post('/:postID', middleware.isLogged, postsController.postPost)
router.delete('/:postID', middleware.isLogged, postsController.deletePost)

module.exports = router
