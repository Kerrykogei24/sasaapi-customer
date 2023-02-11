const mongoose = require('mongoose')




const CardSchema = mongoose.Schema({

    cardNumber: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
})


module.exports = mongoose.model('Card', CardSchema)