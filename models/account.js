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
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }

})



module.exports = mongoose.model('Account', AccountSchema)