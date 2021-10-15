const axios = require("axios");

class FetchApi {
  static getRandom = async function(req, res) {
    try {
      let url =
        "https://api.unsplash.com/photos/random?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s&count=30";
      const data = await axios({
        method: "GET",
        url: url
      });

      res.send(
        data.data.map(function(item) {
          return {
            id: item.id,
            description: item.alt_description,
            url: item.urls,
            user: item.user
          };
        })
      );
    } catch (error) {
      res.status(500).json({
        message: error.message || "internal server error"
      });
    }
  };

  static getCollection = async function(req, res) {
    try {
      let url =
        "https://api.unsplash.com/collections/?client_id=r8N-_PwA2nqjsM85zpC4z1_LHR9ROP9puIO3D6oVm-s";
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
      res.status(500).json({
        message: error.message || "internal server error"
      });
    }
  };

  static getDetailPhoto = async (req, res) => {
    try {
      const { id } = req.body;
      const { photosId } = req.params;
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal Server Error"
      });
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
            url: item.urls,
            user: item.user
          };
        })
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = FetchApi;
