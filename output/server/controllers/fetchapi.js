const axios = require("axios");
const ImageForSale = require("../models/ImageForSell");
const { ObjectId } = require("mongoose").Types;

class FetchApiController {
  static getRandom = async (req, res, next) => {
    try {
      let url =
        "https://api.unsplash.com/photos/random?client_id=qN-U_v7VlbUf0Yb_91yXwDtXhPgtf3j9LDrzQsWvAww&count=30";
      const data = await axios({
        method: "GET",
        url: url
      });

      res.send(
        data.data.map(function(item) {
          return {
            id: "a-" + item.id,
            description: item.alt_description,
            url: item.urls.small,
            user: item.user
          };
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static getCollection = async function(req, res, next) {
    try {
      let url =
        "https://api.unsplash.com/collections/?client_id=qN-U_v7VlbUf0Yb_91yXwDtXhPgtf3j9LDrzQsWvAww";
      const data = await axios({
        method: "GET",
        url: url
      });

      res.send(
        data.data.map(function(item) {
          return {
            id: item.id,
            title: item.title,
            tags: item.tags
              .map(function(items) {
                if (items.source) {
                  return {
                    image_id: items.source.cover_photo.id,
                    image: items.source.cover_photo.urls.small,
                    description: items.source.cover_photo.alt_description,
                    user: items.source.cover_photo.user.profile_image.medium
                  };
                }
                return items.source;
              })
              .filter(function(items) {
                return items !== undefined;
              })
          };
        })
      );
    } catch (error) {
      next(error);
    }
  };
  static getDetailPhoto = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (id[0] === "a") {
        const url = `https://api.unsplash.com/photos/${id.slice(
          2
        )}?client_id=qN-U_v7VlbUf0Yb_91yXwDtXhPgtf3j9LDrzQsWvAww`;

        const { data } = await axios({
          method: "GET",
          url
        });
        res.status(200).json({
          message: "Success geting detail photo from API",
          data: {
            id: data.id,
            description: data.alt_description,
            image: data.urls.full,
            download: data.links.download_location,
            user: {
              id: data.user.id,
              fullName: data.user.username,
              image: data.user.profile_image.medium
            }
          }
        });
      } else if (id[0] === "u") {
        const data = await ImageForSale.findById(ObjectId(id.slice(2)));
        const image = data.image.split(".");
        image.pop();
        res.status(200).json({
          message: "Success geting photo from local",
          data: {
            id: data.id,
            description: data.description,
            image:
              "http://localhost:5000/image/" +
              (data.price ? image.join("") + "-watermark.png" : data.image),
            price: data.price ? "Rp. " + data.price : undefined,
            title: data.title,
            user: data.user,
            download: `http://localhost:5000/image/download/${data.image}`
          }
        });
      } else {
        return next({ code: 404, message: "Url Not Found" });
      }
    } catch (error) {
      next(error);
    }
  };

  static getSearch = async (req, res, next) => {
    try {
      const { query } = req.query;
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s&query=${query}&per_page=50`
      );
      res.status(200).json({
        message: "Success geting result search",
        data: data.results.map(item => {
          return {
            id: item.id,
            description: item.alt_description,
            url: item.urls.small,
            user: item.user
          };
        })
      });
    } catch (error) {
      next(error);
    }
  };

  static getAllImage = async (req, res, next) => {
    try {
      const images = await ImageForSale.find();
      res.status(200).json({
        message: "Success geting all image local",
        data: images.map(item => {
          const image = item.image.split(".");
          image.pop();
          return {
            id: "u-" + item._id,
            description: item.description,
            url:
              "http://localhost:5000/image/" +
              (item.price ? image.join("") + "-watermark.png" : item.image),
            user: item.user
          };
        })
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = FetchApiController;
