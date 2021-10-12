const imageRouter = require("express").Router();
const path = require("path");
const imageController = require("../controllers/image");

const multer = require("multer");
const image = multer({
  dest: path.join(__dirname, "../data/temp")
});

imageRouter.post("/image", image.single("image"), imageController.uploadImage);

module.exports = imageRouter;
