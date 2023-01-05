
const router = require('express').Router()
const adminController = require('../controller/admin')
const middleware = require('../middleware')

router.get('/preview', middleware.isAdmin, adminController.preview)
router.get('/:postID', middleware.isAdmin, adminController.getPost)
router.get('/approve', middleware.isAdmin, adminController.approvePost)
router.delete('/:postID', middleware.isAdmin, adminController.deletePost)

module.exports = router
