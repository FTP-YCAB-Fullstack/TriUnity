const mainRouter = require("express").Router();
const signInRouter = require("./signin");

mainRouter.use(signInRouter);

module.exports = mainRouter;
