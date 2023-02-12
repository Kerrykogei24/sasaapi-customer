#### Description

Design and write a RESTFUL microservice program that will perform database operation to create
CUSTOMER, create customer ACCOUNT.
A customer can have multiple bank accounts and multiple Debit/Credit CARD numbers. Show the
relationship between customer and account & card entiites in your database.
The microservice should support account top-ups and account withdrawal functions.

#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value
4. Add JWT_SECRET with correct value
4. Add JWT_LIFETIME with correct value


#### Routers

- account.js
- customer.js
- cards.js









#### API Endpoints
1. create customer acount

[http://localhost:3000/api/v1/customer](http://localhost:3000/api/v1/customer)

2.  customer login

[http://localhost:3000/api/v1/login](http://localhost:3000/api/v1/login)

3.  create Account

[http://localhost:3000/api/v1/me/account](http://localhost:3000/api/v1/me/account)

4.  create Card

[http://localhost:3000/api/v1/me/account](http://localhost:3000/api/v1/me/account)

5.  Top Up the account

[http://localhost:3000/api/v1/me/top-up/:id](http://localhost:3000/api/v1/me/top-up/:id)


6.  Withdraw from the account


[http://localhost:3000/api/v1/me/withdraw/:id](http://localhost:3000/api/v1/me/withdraw/:id)