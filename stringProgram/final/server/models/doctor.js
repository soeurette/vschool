var mongoose = require("mongoose");
var Departments = mongoose.Schema;

var PatientSchema = new Departments({
    PatientName: {
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model("Patients", PatientSchema);