var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    ammount: {
        type: Number,
        required: true
    },
    isFresh: {
        type: Boolean,
        required: false
    }

});

//note:type and required are for validate

module.exports = mongoose.model("shop", shopSchema);