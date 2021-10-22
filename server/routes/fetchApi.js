"use strict";

const FetchApiRouter = require("express").Router();
const FetchApiController = require("../controllers/fetchapi");

FetchApiRouter.get("/photos", FetchApiController.getRandom);
FetchApiRouter.get("/detailpage/:id", FetchApiController.getDetailPhoto);
FetchApiRouter.get("/search/photos", FetchApiController.getSearch);
FetchApiRouter.get("/photos/local", FetchApiController.getAllImage);

module.exports = FetchApiRouter;
