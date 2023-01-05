
const router = require('express').Router()
const adminController = require('../controller/admin')
const middleware = require('../middleware')

router.get('/preview', middleware.isAdmin, adminController.preview)
router.get('/:postID', middleware.isAdmin, adminController.getPost)
router.delete('/:postID', middleware.isAdmin, adminController.deletePost)
router.get('/approve', middleware.isAdmin, adminController.approvePost)

module.exports = router
