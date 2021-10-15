const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Token = require("../models/Token");

class SignIn {
  static async Register(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await User.create({
        firstName,
        lastName,
        email,
        password
      });
      const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT_TOKEN);
      Token.create({
        userId: user._id,
        token
      });
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
      next(error);
    }
  }

  static async Login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        next({ code: 422, message: "Required to fill email and password" });
      }
      const user = await User.findOne({ email });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        next({ code: 401, message: "email or password is wrong" });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT_TOKEN);
        Token.deleteOne({ userId: user._id }).then(() =>
          Token.create({ userId: user._id, token })
        );
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
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SignIn;
