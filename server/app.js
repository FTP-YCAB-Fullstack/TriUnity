"use strict"
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./routes");
const handlerError = require("./middlewares/handlerError");
const cookieParser = require("cookie-parser");
const port = process.env.SERVER_PORT;

const corsConfig = {
  credentials: true,
  origin: process.env.ORIGIN
};

app
  .use(cors(corsConfig))
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.use(mainRouter).use(handlerError);

app.listen(port, () => console.log(`Running server on port ${port}`));
