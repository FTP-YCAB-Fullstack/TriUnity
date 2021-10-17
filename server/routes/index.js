"use strict";

const mainRouter = require("express").Router();

const FetchRouter = require("./fetchApi");
const PaymentRouter = require("./payment");
const signInRouter = require("./signin");
const imageRouter = require("./image");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const Profile = require("./profile");

mainRouter.use(FetchRouter);
mainRouter.use(signInRouter);
mainRouter.use(PaymentRouter);

mainRouter.use(authentication, authorization);
mainRouter.use(imageRouter);
mainRouter.use(Profile);

module.exports = mainRouter;
