const imageRouter = require("express").Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const image = multer({
  dest: "../data/temp"
});

imageRouter.post("/image", image.single("image"), (req, res) => {
  const tempPath = req.file.path;
  console.log(tempPath);
  const targetPath = path.join(__dirname, "../data/image/image.png");
  console.log(targetPath);

  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }
});

module.exports = imageRouter;
