const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connection = mongoose.createConnection(process.env.DB_URL);

const validateEmail = email => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validatePassword = password => {
  const character = /[A-Z]+/.test(password) && /[a-z]+/.test(password);
  const number = /[0-9]+/.test(password);
  return character && number;
};

const validateLengthPassword = password => {
  return password.length >= 6;
};

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
      validate: [validateEmail, "Please fill a valid email address"]
    },
    password: {
      type: String,
      required: true,
      validate: [
        {
          validator: validateLengthPassword,
          msg: "Please fill a password min 6 character"
        },
        {
          validator: validatePassword,
          msg: "Password must have numbers, uppercase and lowercase letters"
        }
      ]
    }
  },
  {
    versionKey: false
  }
);

User.post("validate", doc => {
  doc.password = bcrypt.hashSync(doc.password, 8);
});

module.exports = connection.model("User", User);
