var mongoose = require("mongoose");
var Appointment = mongoose.Schema;

var AppointmentSchema = new Appointment({
    PatientName: {
        type: String
    },
    PhoneNumber: {
        type: Number
    },
    Email: {
        type: String
    },
    departmentName: {
        type: String
    },
    Gender: {
        type: String,
    },
    reason: {
        type: String
    },
    time: {
        type: String
    },
    doctorName: {
        type: String
    },
    Diagnoses: {
        type: String,
    },
    Surgery: {
        type: String
    },
    Disease: {
        type: String
    },
    Drugs: {
        type: String
    },
    Treatment: {
        type: String
    },
    Test: {
        type: String
    },
    Temprature: {
        type: Number,
    },
    Pressure: {
        type: Number,
    },
    Smoker: {
        type: Boolean || false,
    },
    Alcohol: {
        type: Boolean || false,
    },
    NextVisit: {
        type: String
    },
    Price: {
        type: Number
    },
    Wieght: {
        type: Number
    }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);