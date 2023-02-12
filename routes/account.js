const express = require('express');
const { accountTopup, accountWithdraw, createAccount, getAllAccount, getAccount } = require('../controllers/account')
const router = express.Router()




router.route('/account').get(getAllAccount).post(createAccount)
router.route('/account/:id').get(getAccount)
router.route('/top-up/:id').post(accountTopup)
router.route('/withdraw/:id').post(accountWithdraw)


module.exports = router