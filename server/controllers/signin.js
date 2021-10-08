const axios = require("axios");
let User = require("../models/User");

class SignIn {
  static async Register(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    User = await User();

    const user = await User.create({ firstName, lastName, email, password });
    const data = await user.save();

    res.status(201).json({
      message: "success register",
      data
    });
  }

  static async Login(req, res, next) {}
}

module.exports = SignIn;
