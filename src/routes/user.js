const express = require('express')
const router = express.Router();
const { login, logout, register, getMe } = require('../components/auth_component')
const { user_getOne } = require('../components/user_component')

router.post('/login',login)
router.post('/logout',logout)
router.post('/register',register)

// [Middleware] - Auth

router.get('/me',getMe)

module.exports = router