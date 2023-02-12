const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const Customer = require('../models/customer')


const createCustomer = async(req, res) => {


    const customer = await Customer.create({...req.body })
    const token = customer.createJWT()
    res.status(StatusCodes.CREATED).json({
        customer: { name: customer.name },
        token

    })
}

const customerLogin = async(req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new BadRequestError("Please provide email and password")
    }

    const customer = await Customer.findOne({ email })
    if (!customer) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const isPasswordCorrect = await customer.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid Credentials")
    }
    const token = customer.createJWT();
    res.status(StatusCodes.OK).json({ customer: { name: customer.name }, token })
}




module.exports = { customerLogin, createCustomer };