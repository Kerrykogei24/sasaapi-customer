require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();



// connectDB

const connectDB = require('./db/connect')

// router 
const customerRouter = require('./routes/customer')
const accountRouter = require('./routes/account')

app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('hello')
// })

app.use(express.json())


app.use('/api/v1', accountRouter, customerRouter);





const port = process.env.PORT || 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();