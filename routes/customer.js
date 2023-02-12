const express = require('express');
const { customerLogin, createCustomer } = require('../controllers/customer')
const router = express.Router()




router.route('/customer').get(createCustomer).post(createCustomer)
router.route('/login').post(customerLogin)


module.exports = router