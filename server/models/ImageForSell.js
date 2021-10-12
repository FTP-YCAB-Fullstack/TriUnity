const Schema = require("mongoose").Schema;
const connection = require("mongoose").createConnection(process.env.DB_URL);

const ImageForSell = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = connection.model("ImageForSale", ImageForSell);
