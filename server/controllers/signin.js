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

  static async Login(req, res, next) {
    const { email, password } = req.body;
    const data = await User.findOne({ email });
    if (!data || !bcrypt.compareSync(password, data.password)) {
      res.status(400).json({
        message: "email or password is wrong"
      });
    } else {
      const token = jwt.sign({ id: data._id }, process.env.SECRET_JWT_TOKEN);
      res.status(200).json({
        message: "success login",
        token,
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          email
        }
      });
    }
  }
}

module.exports = SignIn;
