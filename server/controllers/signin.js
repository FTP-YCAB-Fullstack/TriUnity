const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

class SignIn {
  static async Register(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 8)
      });
      const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT_TOKEN);

      res.status(201).json({
        message: "success register",
        token,
        user: {
          id: user._id,
          firstName,
          lastName,
          email
        }
      });
    } catch (error) {
      next({ code: 500, message: error.message });
    }
  }

  static async Login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!data || !bcrypt.compareSync(password, data.password)) {
      next({ code: 400, message: "email or password is wrong" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT_TOKEN);
      res.status(200).json({
        message: "success login",
        token,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email
        }
      });
    }
  }
}

module.exports = SignIn;
