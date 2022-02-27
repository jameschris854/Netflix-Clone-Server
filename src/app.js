const express = require('express')
const routes = require('./routes/v1')
const {responseHandler,responseConverter} = require('./middlewares/response')

const app = express()

//parse json request body
app.use(express.json());

app.use('/v1',(routes))

app.use(responseConverter);

app.use(responseHandler)

module.exports = app