var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    name: {
        type: String,
        required: true,
//        unique: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    image: {
        type: String
    },
     description: {
        type:String ,
        required: true,
    }
});



module.exports = mongoose.model("Shop", shopSchema);