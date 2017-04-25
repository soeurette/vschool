var mongoose = require("mongoose");
var Departments = mongoose.Schema;

var DepartmentsSchema = new Departments({
    departmentName: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    speciallity: {
        type: String,
        required: true
    },
    floor: {
        type: String
    }
});

module.exports = mongoose.model("Departments", DepartmentsSchema);