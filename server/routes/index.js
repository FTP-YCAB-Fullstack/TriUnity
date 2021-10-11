const mainRouter = require("express").Router();
const signInRouter = require("./signin");
const imageRouter = require("./image");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

mainRouter.use(signInRouter);
mainRouter.use(imageRouter);
mainRouter.use(authentication).use(authorization);

module.exports = mainRouter;
