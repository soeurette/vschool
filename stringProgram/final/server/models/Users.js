var mongoose = require("mongoose");
var Users = mongoose.Schema;

var UserSchema = new Users({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Privellage: {
        enum: ["user", "admin", "doctor", "secretary"],
        default: "user",
        type: String,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    socialSecurityNumber: {
        type: Number
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    }
});
module.exports = mongoose.model("User", UserSchema);