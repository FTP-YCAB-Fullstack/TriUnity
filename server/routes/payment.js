"use strict"

const PaymentRouter = require('express').Router()
const Index = require('../controllers/payment/index')

PaymentRouter.post('/charge', Index.bankTransfer)

module.exports = PaymentRouter