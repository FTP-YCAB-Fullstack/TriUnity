const mainRouter = require("express").Router();
const signInRouter = require("./signin");
const authentication = require("../middlewares/authentication");

mainRouter.use(authentication);
mainRouter.use(signInRouter);

module.exports = mainRouter;
