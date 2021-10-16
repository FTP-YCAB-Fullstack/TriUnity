const imageRouter = require("express").Router();
const path = require("path");
const imageController = require("../controllers/image");

const multer = require("multer");
const image = multer({
  dest: path.join(__dirname, "../data/temp")
});

imageRouter.post("/image", image.single("image"), imageController.uploadImage);
imageRouter.get("/image/for-sale", imageController.getAllForSale);
imageRouter.delete("/image/for-sale/:id", imageController.deleteForSale);
imageRouter.get("/image/:id", imageController);

module.exports = imageRouter;
