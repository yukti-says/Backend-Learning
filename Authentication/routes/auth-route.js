const express = require('express')
const { registerUser , LoginUser } = require('../controllers/auth-controller')
const router = express.Router();


// all routes are related to authentication
router.post('/register', registerUser)
router.post('/login' , LoginUser)




module.exports = router