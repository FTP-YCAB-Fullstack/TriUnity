const User = require("../models/User");

class Profile {
  static async getProfile(req, res, next) {
    try {
      const data = req.currentUser;
      res.status(200).json({
        message: "succesfully get profile",
        data
      });
    } catch (error) {
      next(error);
    }
  }
  static async patchProfile(req, res, next) {
    try {
      const { firstName, lastName, email,address,description } = req.body;
      const _id = req.currentUser._id
        console.log(req.currentUser)
      const data = await User.updateMany({_id},{$set:{
        firstName,
        lastName,
        email,
        address,
        description
      }
      });
      console.log(data)
      res.status(200).json({
        message: "succesfully updated",
        data
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Profile;
