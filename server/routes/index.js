const mainRouter = require("express").Router();
const signInRouter = require("./signin");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

mainRouter.use(signInRouter);

mainRouter.use(authentication).use(authorization);

module.exports = mainRouter;
