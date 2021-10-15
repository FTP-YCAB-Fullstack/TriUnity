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
      const id = req.params.id;
      const { firstName, lastName, email } = req.body;
      const user = await User.updateMany({
        firstName,
        lastName,
        email
      });
      res.status(200).json({
        message: "succesfully updated"
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Profile;
