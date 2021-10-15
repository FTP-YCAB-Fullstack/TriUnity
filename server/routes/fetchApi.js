"use strict";

const FetchApiRouter = require("express").Router();
const FetchApiController = require("../controllers/fetchapi");

FetchApiRouter.get("/photos", FetchApiController.getRandom);

FetchApiRouter.get("/collection", FetchApiController.getCollection);

FetchApiRouter.get("/photos/:photosId", FetchApiController.getDetailPhoto);

FetchApiRouter.get("/search/photos", FetchApiController.getSearch);

module.exports = FetchApiRouter;
