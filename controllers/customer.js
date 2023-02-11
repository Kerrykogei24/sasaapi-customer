 const Customer = require('../models/customer')


 const createCustomer = async(req, res) => {

     const customer = await Customer.create(req.body)

     res.status(200).json({ customer })
 }




 module.exports = createCustomer;