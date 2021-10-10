const Schema = require("mongoose").Schema;
const connection = require("mongoose").createConnection(process.env.DB_URL);
const validate = require("../utils/validate");

const Token = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      validate: [validate.email, "Please fill a valid email address"]
    },
    token: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    _id: false
  }
);

module.exports = connection.model("Token", Token);
