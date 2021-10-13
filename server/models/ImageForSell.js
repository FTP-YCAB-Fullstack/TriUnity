const Schema = require("mongoose").Schema;
const connection = require("mongoose").createConnection(process.env.DB_URL);

const ImageForSell = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true
    },
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
