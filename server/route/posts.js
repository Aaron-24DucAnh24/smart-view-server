
const router = require('express').Router()
const postsController = require('../controller/posts')
const middleware = require('../middleware')

router.get('/preview', postsController.preview)
router.get('/myPost', middleware.isLogged, postsController.myPost)
router.get('/report', middleware.isLogged, postsController.reportPost)
router.get('/like', middleware.isLogged, postsController.likePost)
router.post('/post', middleware.isLogged, postsController.postPost)
router.get('/trending', postsController.trending)
router.get('/topLike', postsController.topLike)
router.get('/:postID', postsController.getPost)
router.put('/:postID', middleware.isLogged, postsController.putPost)
router.delete('/:postID', middleware.isLogged, postsController.deletePost)

module.exports = router
