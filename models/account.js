const mongoose = require('mongoose')





const AccountSchema = mongoose.Schema({
    accountNumber: {
        type: String,
        required: [true, 'Account number is required'],
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }

}, { timestamps: true })



module.exports = mongoose.model('Account', AccountSchema)