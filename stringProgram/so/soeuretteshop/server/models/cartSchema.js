var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    Receiver: {
        type: String,
        required: true,
//        unique: true,
    },
    payment: {
        type: Number,
        required: true,
    },
      adress: {
        type: String,
        required: true,
    },
    telephone: {
        type: Number,
        required: true,
    },username: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model("Cart", cartSchema);