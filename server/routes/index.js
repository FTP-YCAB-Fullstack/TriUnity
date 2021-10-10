"use strict"

const MainRouter = require('express').Router();

const FetchRouter = require('./fetchApi');
const PaymentRouter = require('./payment');
const signInRouter = require("./signin");


MainRouter.use(FetchRouter)
MainRouter.use(signInRouter);
MainRouter.use(PaymentRouter)

module.exports = MainRouter;
