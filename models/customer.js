const mongoose = require('mongoose')




const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }],
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
});


module.exports = mongoose.model('Customer', CustomerSchema)