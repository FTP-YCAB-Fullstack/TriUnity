const signInRouter = require("express").Router();
const signInController = require("../controllers/signin");

signInRouter.post("/users/register", signInController.Register);
signInRouter.post("/users/login/", signInController.Login);

module.exports = signInRouter;
