const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connection = mongoose.createConnection(process.env.DB_URL);
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
    }
  },
  {
    versionKey: false,
    _id: false
  }
);

User.post("validate", doc => {
  doc.password = bcrypt.hashSync(doc.password, 8);
});

module.exports = connection.model("User", User);
