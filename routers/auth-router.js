const Router = require('express').Router

const router = Router()

const authController = require('../controllers/user-controller.js')

// const authMiddleware = require('../middleware/auth-middleware')

// const MULTER = require('multer')
// const multer = require('../middleware/multer-middleware')
// const router = Router()


// here all routes
router.post('/create-user', authController.createUser)
router.post('/login', authController.login)
router.post('/open-box', authController.openBox)
router.post('/count', authController.count)

module.exports = router