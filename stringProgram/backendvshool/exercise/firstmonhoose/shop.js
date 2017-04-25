var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    type: String,
    ammount: Number,
    isFresh: Boolean

});



module.exports = mongoose.model("Shop", shopSchema);