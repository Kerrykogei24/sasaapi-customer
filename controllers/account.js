const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const Account = require('../models/account')


const createAccount = async(req, res) => {
    req.body.createdBy = req.customer.customerId
    const account = await Account.create(req.body)

    res.status(StatusCodes.CREATED).json({ account })
}
const getAllAccount = async(req, res) => {
    const accounts = await Account.find({ createdBy: req.customer.customerId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ accounts, count: accounts.length })
}
const getAccount = async(req, res) => {
    const { account: { customerId }, params: { id: accountId } } = req
    const account = await Account.findOne({ _id: accountId, createdBy: customerId })

    if (!account) {
        throw new NotFoundError(`No job with id ${accountId}`)
    }
    res.status(StatusCodes.OK).json({ account })
}

const accountTopup = async(req, res) => {

    const { id: accountId } = req.params
    const amount = req.body.amount;

    const account = await Account.findOne({ _id: accountId });

    if (!account) {
        throw new BadRequestError("Account not found");
    }

    account.balance += amount;
    await account.save();

    res.json({ balance: account.balance });

    // res.status(StatusCodes.OK).json({ accounts, count: accounts.length })
}
const accountWithdraw = async(req, res) => {
    const { id: accountId } = req.params
    const amount = req.body.amount;
    const account = await Account.findOne({ _id: accountId });

    if (!account) {
        throw new BadRequestError("Account not found");
    }
    if (amount > account.balance) {
        throw new UnauthenticatedError("Insufficient balance")

    }
    account.balance -= amount;
    await account.save();

    res.json({ balance: account.balance });


}




module.exports = { createAccount, getAllAccount, getAccount, accountWithdraw, accountTopup };