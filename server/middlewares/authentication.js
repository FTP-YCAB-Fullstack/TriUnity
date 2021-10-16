const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const User = require("../models/User");

const authentication = async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      next({
        code: 400,
        message: "Token is required to access this resource"
      });
    }
    const user = jwt.verify(req.cookies.token, process.env.SECRET_JWT_TOKEN);
    const isTokenActive = await Token.findOne({
      userId: user.id,
      token: req.cookies.token
    });
    if (isTokenActive) {
      req.currentUser = await User.findOne({ _id: user.id });
      next();
    } else {
      next({ code: 403, message: "Inactive token" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
