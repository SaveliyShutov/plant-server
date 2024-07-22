const Router = require('express').Router

const router = Router()

const authController = require('../controllers/user-controller.js')

// const authMiddleware = require('../middleware/auth-middleware')

// const MULTER = require('multer')
// const multer = require('../middleware/multer-middleware')
// const router = Router()


// here all routes
router.post('/login', authController.login)
router.post('/count', authController.count)

module.exports = router