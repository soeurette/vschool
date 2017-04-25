var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }


});



//note:type and required are for validate

module.exports = mongoose.model("student", studentSchema);