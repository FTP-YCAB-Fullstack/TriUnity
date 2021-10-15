const handlerError = (err, req, res, next) => {
  console.error(err);
  if (typeof err.code === "number" && err.code <= 500 && err.message) {
    res.status(err.code).json({
      message: err.message
    });
  } else {
    const requiredError = err.message.match(/`\w+`/);
    const uniqueError = /E11000/.test(err.message);
    const validatePasswordError = /password/i.test(err.message);
    const signaturError = /invalid signature/.test(err.message);
    if (requiredError) {
      err.code = 422;
      err.message = `Required to fill ${String(requiredError).substr(
        1,
        String(requiredError).length - 2
      )}`;
    } else if (uniqueError) {
      err.code = 409;
      err.message = "Email has been registered";
    } else if (validatePasswordError) {
      err.code = 403;
    } else if (signaturError) {
      err.code = 401;
    }
    res.status(err.code || 500).json({
      message: err.message || "Internal Server Error"
    });
  }
};

module.exports = handlerError;
