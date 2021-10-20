const midtransRouter = require("express").Router();
const midtransController = require("../controllers/midtrans");

midtransRouter.post("/payment", midtransController.payment);

module.exports = midtransRouter;
