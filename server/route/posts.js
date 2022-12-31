
const router = require('express').Router()
const postsController = require('../controller/posts')
const middleware = require('../middleware')

router.get('/preview', postsController.preview)
router.get('/report', middleware.isLogged, postsController.reportPost)
router.get('/like', middleware.isLogged, postsController.likePost)
router.get('/:postID', postsController.getPost)

// Bảo
router.put('/:postID', middleware.isLogged, postsController.putPost)
router.post('/:postID', middleware.isLogged, postsController.postPost)
router.delete('/:postID', middleware.isLogged, postsController.deletePost)

module.exports = router
