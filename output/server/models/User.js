const Schema = require("mongoose").Schema;
const bcrypt = require("bcryptjs");
const connection = require("mongoose").createConnection(process.env.DB_URL);
const validate = require("../utils/validate");

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validate.email, "Please fill a valid email address"]
    },
    password: {
      type: String,
      required: true,
      validate: [
        {
          validator: validate.lengthPassword,
          msg: "Please fill a password min 6 character"
        },
        {
          validator: validate.password,
          msg: "Password must have numbers, uppercase and lowercase letters"
        }
      ]
    },
    address: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
  },
  {
    versionKey: false
  }
);

User.post("validate", doc => {
  doc.password = bcrypt.hashSync(doc.password, 8);
});

module.exports = connection.model("User", User);
