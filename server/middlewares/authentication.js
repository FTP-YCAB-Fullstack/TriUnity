const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const User = require("../models/User");

const authentication = async (req, res, next) => {
  try {
    console.log(req.headers.token);
    if (!req.headers.token) {
      return next({
        code: 400,
        message: "Token is required to access this resource"
      });
    }
    const user = jwt.verify(req.headers.token, process.env.SECRET_JWT_TOKEN);
    const isTokenActive = await Token.findOne({
      userId: user.id,
      token: req.headers.token
    });
    if (isTokenActive) {
      req.currentUser = await User.findOne({ _id: user.id });
      return next();
    } else {
      return next({ code: 403, message: "Inactive token" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
