const imageRouter = require("express").Router();
const fs = require("fs");
const path = require("path");

const multer = require("multer");
const image = multer({
  dest: path.join(__dirname, "../data/temp")
});

imageRouter.post("/image", image.single("image"), (req, res, next) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "../data/image/image2.png");

  if (!path.extname(req.file.originalname).toLowerCase() === ".png") {
    next({ code: 403, message: "Only .png files are allowed!" });
  } else {
    fs.rename(tempPath, targetPath, err => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({
          message: "Image uploaded"
        });
        fs.unlink(tempPath);
      }
    });
  }
});

module.exports = imageRouter;
