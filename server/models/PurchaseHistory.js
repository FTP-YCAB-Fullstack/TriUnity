const Schema = require("mongoose").Schema;
const connection = require("mongoose").createConnection(process.env.DB_URL);

const PurchaseHistory = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    inCart: {
        type: String,
        require: true
    },
    purchaseDate: {
        type: Date,
        required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = connection.model("PurchaseHistory", PurchaseHistory);