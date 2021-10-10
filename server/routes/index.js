"use strict"

const MainRouter = require('express').Router();

const FetchRouter = require('./fetchApi');
const PaymentRouter = require('./payment');

MainRouter.use(FetchRouter)
MainRouter.use('/', PaymentRouter)

module.exports = MainRouter