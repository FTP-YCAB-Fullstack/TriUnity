const Schema = require("mongoose").Schema;
const connection = require("mongoose").createConnection(process.env.DB_URL);

const User = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    require: true
  },
  fullName: String,
  image: String
});

const ImageForSell = new Schema(
  {
    user: User,
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
      unique: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = connection.model("ImageForSale", ImageForSell);
