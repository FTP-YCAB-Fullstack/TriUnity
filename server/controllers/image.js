const fs = require("fs");
const path = require("path");
const ImageForSale = require("../models/ImageForSell");
const { ObjectId } = require("mongoose").Types;

class Image {
  static async uploadImage(req, res, next) {
    try {
      const tempPath = req.file.path;
      const filename = `${Date.now()}-${req.body.filename}`;
      const { title, price, description } = req.body;
      const targetPath = path.join(__dirname, `../data/image/${filename}`);
      const { _id, firstName, lastName, image } = req.currentUser;

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
              user: {
                _id,
                fullName: firstName + " " + lastName,
                image
              },
              image: filename,
              title,
              price,
              description
            });
            res.status(201).json({
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
      const photos = await ImageForSale.find({ "user._id": ObjectId(userId) });
      res.status(200).json({
        message: "Success geting photos for sale",
        photos
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteForSale(req, res, next) {
    try {
      const { id } = req.params;
      fs.unlink(path.join(__dirname, `../data/image/${id}`), async err => {
        if (err) return next(err);
        await ImageForSale.deleteOne({ image: id });
        res.status(200).json({
          message: "Success deleting photos for sale"
        });
      });
    } catch (error) {
      next(error);
    }
  }

  static downloadPhoto(req, res, next) {
    try {
      const { id } = req.params;
      res.download(path.join(__dirname, `../data/image/${id}`), err =>
        console.log(err)
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Image;
