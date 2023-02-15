// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

const rateLimiter = require('express-rate-limit')

require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


// swagger
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

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



app.use(express.json())
app.set('trust proxy', 1)


app.use(helmet())
app.use(cors())
app.use(xss())
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, //15 minutes
        max: 100, //limit each ip to 100 request per windowMs
    }))


app.get('/', (req, res) => {

    res.send('<h1>Sasakazi Api</h1><a href="/api-docs">Documentation</a>')
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));





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