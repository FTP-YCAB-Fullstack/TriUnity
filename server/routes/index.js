"use strict";

const mainRouter = require("express").Router();

const FetchRouter = require("./fetchApi");
const signInRouter = require("./signin");
const imageRouter = require("./image");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const Profile = require("./profile");
const midtrans = require("./midtrans");

mainRouter.use(FetchRouter);
mainRouter.use(signInRouter);

mainRouter.use(authentication, authorization);
mainRouter.use(midtrans);
mainRouter.use(imageRouter);
mainRouter.use(Profile);

module.exports = mainRouter;
