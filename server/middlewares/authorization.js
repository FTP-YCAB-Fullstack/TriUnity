const authorization = (req, res, next) => {
  // dilewati terlebih dahulu
  next();
};

module.exports = authorization;
