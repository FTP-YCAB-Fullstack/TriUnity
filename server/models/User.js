const db = require("mongoose");
const Schema = require("mongoose").Schema;

const validateEmail = email => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema({
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
    min: [6, "Please fill a password min 6 character"],
    validate: {
      validator: password => {
        const character = /[A-Z]+/.test(password) && /[a-z]+/.test(password);
        const number = /[0-9]+/.test(password);
        return character && number;
      }
    }
  }
});

module.exports = async () => {
  await db.connect(process.env.DB_URL);
  return db.model("User", User);
};
