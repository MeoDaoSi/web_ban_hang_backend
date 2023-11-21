const express = require('express')
const router = express.Router();
const user = require('./user')
const merchandise = require('./merchandise')

router.use('/user',user)
router.use('/merchandise',merchandise)

module.exports = router