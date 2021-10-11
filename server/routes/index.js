"use strict"

const mainRouter = require('express').Router();

const FetchRouter = require('./fetchApi');
const PaymentRouter = require('./payment');
const signInRouter = require("./signin");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");


mainRouter.use(FetchRouter)
mainRouter.use(signInRouter);
mainRouter.use(PaymentRouter)
mainRouter.use(authentication).use(authorization);

module.exports = mainRouter;
