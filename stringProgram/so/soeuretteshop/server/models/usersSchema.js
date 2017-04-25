var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var usersSchema = new Schema({
      email: {
        type: String,        
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    dateofbirth:{
        type:String
    },  
    privilege: {
    type: String,
    default:"user",
    enum: ["admin", "user"],

  }
});


module.exports = mongoose.model("Users", usersSchema);