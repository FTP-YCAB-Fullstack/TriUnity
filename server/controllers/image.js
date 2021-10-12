const fs = require("fs");
const path = require("path");
const ImageForSale = require("../models/ImageForSell");

class Image {
  static async uploadImage(req, res, next) {
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
          ImageForSale.create({
            userId: req.currentUser._id,
            image: filename
          });
          res.status(200).json({
            message: "Image uploaded"
          });
        }
      });
    }
  }
}

module.exports = Image;
