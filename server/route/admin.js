
const router = require('express').Router()
const adminController = require('../controller/admin')
const middleware = require('../middleware')

router.get('/preview', middleware.isAdmin, adminController.preview)
router.get('/:postID', adminController.getPost)
router.delete('/:postID', adminController.deletePost)
router.get('/approve/:postIP', adminController.approvePost)

module.exports = router
