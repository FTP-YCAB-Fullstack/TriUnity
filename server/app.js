"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./routes");
const handlerError = require("./middlewares/handlerError");
const cookieParser = require("cookie-parser");
const path = require("path");
const port = process.env.SERVER_PORT;
const corsConfig = {
  credentials: true,
  origin: process.env.ORIGIN
};
const axios = require("axios");

app
  .use(cors(corsConfig))
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.use("/image", express.static(path.join(__dirname, "./data/image")));

app.use("/image1", async (req, res) => {
  // const response = await axios.get(
  //   "https://images.unsplash.com/photo-1631891348440-9baa256187c5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
  //   { responseType: "arrayBuffer" }
  // );
  // const data = response.data.toString("binary");
  // console.log(data);
  // res.writeHead(200, {
  //   "Content-Type": "application/octet-stream",
  //   "Content-disposition": "attachment;filename=image.jpg",
  //   "Content-Length": data.length
  // });
  // res.end(Buffer.from(data, "binary"));
});

app.use(mainRouter).use(handlerError);

app.listen(port, () => console.log(`Running server on port ${port}`));
