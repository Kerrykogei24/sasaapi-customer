const express = require('express');
const createCustomer = require('../controllers/customer')
const router = express.Router()




router.route('/customer').get(createCustomer).post(createCustomer)


module.exports = router