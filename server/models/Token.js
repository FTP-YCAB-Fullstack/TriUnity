const Schema = require("mongoose").Schema;
const connection = require("mongoose").createConnection(process.env.DB_URL);

const Token = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true
    },
    token: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = connection.model("Token", Token);
