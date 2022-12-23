
const router = require('express').Router()
const adminController = require('../controller/admin')
const middleware = require('../middleware')

// router.get('/preview', middleware.isAdmin, adminController.preview)
// router.get('/:postID', middleware.isAdmin, adminController.getPost)
// router.delete('/:postID', middleware.isAdmin, adminController.deletePost)
// router.get('/approve/:postIP', middleware.isAdmin, adminController.approvePost)

router.get('/preview', adminController.preview)
router.get('/approve', adminController.approvePost)
router.get('/:postID', adminController.getPost)
router.delete('/:postID', adminController.deletePost)

module.exports = router
