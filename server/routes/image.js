const imageRouter = require("express").Router();
const fs = require("fs");
const path = require("path");

const multer = require("multer");
const image = multer({
  dest: path.join(__dirname, "../data/temp")
});

imageRouter.post("/image", image.single("image"), (req, res, next) => {
  const tempPath = req.file.path;
  const filename = `${Date.now()}-${req.body.filename}`;
  const targetPath = path.join(__dirname, `../data/image/${filename}`);

  if (!path.extname(req.file.originalname).toLowerCase() === ".png") {
    next({ code: 403, message: "Only .png files are allowed!" });
    fs.unlink(tempPath, err => {
      console.error(err);
    });
  } else {
    fs.rename(tempPath, targetPath, err => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({
          message: "Image uploaded"
        });
      }
    });
  }
});

module.exports = imageRouter;
