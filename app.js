require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();



// connectDB

const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

// router 
const customerRouter = require('./routes/customer')
const customerLogin = require('./routes/customer')
const accountWithdraw = require('./routes/account')
const accountTopup = require('./routes/account')
const accountRouter = require('./routes/account')
const createCard = require('./routes/cards')


// error handelers
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('hello')
// })

app.use(express.json())


app.use('/api/v1/me', authenticateUser, createCard, accountRouter, accountTopup, accountWithdraw);
app.use('/api/v1', customerLogin, customerRouter);



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


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