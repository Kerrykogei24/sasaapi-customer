const express = require('express');
const { getAllCards, createCard } = require('../controllers/cards')
const router = express.Router()




router.route('/cards').get(getAllCards).post(createCard)


module.exports = router