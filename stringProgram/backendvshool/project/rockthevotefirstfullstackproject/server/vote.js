var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var voteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comment: [String],

});



//note:type and required are for validate

module.exports = mongoose.model("vote", voteSchema);