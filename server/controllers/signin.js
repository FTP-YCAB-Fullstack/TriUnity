const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

class SignIn {
  static async Register(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 8)
    });
    const data = await user.save();
    const token = jwt.sign({ id: data._id }, process.env.SECRET_JWT_TOKEN);

    res.status(201).json({
      message: "success register",
      token,
      user: {
        id: data._id,
        firstName,
        lastName,
        email
      }
    });
  }

  static async Login(req, res, next) {}
}

module.exports = SignIn;
