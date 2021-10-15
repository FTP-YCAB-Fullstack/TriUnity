const fs = require("fs");
const path = require("path");
const ImageForSale = require("../models/ImageForSell");

class Image {
  static async uploadImage(req, res, next) {
    try {
      const tempPath = req.file.path;
      const filename = `${Date.now()}-${req.body.filename}`;
      const { title, price, description } = req.body;
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
              image: filename,
              title,
              price,
              description
            });
            res.status(200).json({
              message: "Image uploaded"
            });
          }
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getAllForSale(req, res, next) {
    try {
      const { id: userId } = req.currentUser;
      const photos = await ImageForSale.find({ userId });
      res.status(200).json({
        message: "Success geting photos for sale",
        photos
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Image;
