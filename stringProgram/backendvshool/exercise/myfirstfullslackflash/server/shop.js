var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    ammount: {
        type: String,
        required: true
    },
    isFresh: {
        type: Boolean,
        required: true
    }

});

//note:type and required are for validate

module.exports = mongoose.model("shop", shopSchema);