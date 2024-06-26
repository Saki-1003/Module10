const express = require('express')
const app = express()
const cors = require('cors')


const calcRouter = require('./routes/calculatorRoute')
app.use(cors())
app.use('/Calculator', calcRouter)

module.exports = app