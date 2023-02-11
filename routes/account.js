const express = require('express');
const createAccount = require('../controllers/account')
const router = express.Router()




router.route('/account').get(createAccount).post(createAccount)


module.exports = router