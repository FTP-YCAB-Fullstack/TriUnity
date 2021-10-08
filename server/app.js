require("dotenv").config();

const express = require("express");
const app = express();
const mainRouter = require("./routes");
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(mainRouter);

app.listen(port, () => console.log(`Running server on port ${port}`));
