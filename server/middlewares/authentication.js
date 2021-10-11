const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const User = require("../models/User");

const authentication = async (req, res, next) => {
  try {
    const user = jwt.verify(req.cookies.token, process.env.SECRET_JWT_TOKEN);
    const isTokenActive = await Token.findOne({
      userId: user.id,
      token: req.cookies.token
    });
    if (isTokenActive) {
      req.currentUser = await User.findOne({ id: user.id });
      next();
    } else {
      next({ code: 403, message: "Token inactive" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
