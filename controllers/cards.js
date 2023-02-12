const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const Card = require('../models/card')


const createCard = async(req, res) => {
    req.body.createdBy = req.customer.customerId
    const card = await Card.create(req.body)
    console.log(req.body);

    res.status(200).json({ card })
}
const getAllCards = async(req, res) => {
    const cards = await Card.find({ createdBy: req.customer.customerId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ cards, count: cards.length })
}





module.exports = { getAllCards, createCard };