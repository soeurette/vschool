var express = require("express");
var AppointmentRoute = express.Router();
var Appointment = require("../models/Appointment.js");

AppointmentRoute.get("/", function (req, res) {
    Appointment.find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                "message": "sucess",
                data: data
            })
        }
    });
});
AppointmentRoute.get("/", function (req, res) {
    Appointment.find({
        doctorName: req.body.doctorName
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                "message": "sucess",
                data: data
            })
        }
    });
});


//AppointmentRoute.get("/:id", function (req, res) {
//    Appointment.findOne({
//        _id: req.params.id
//    }, function (err, data) {
//        if (err) {
//            res.status(500).send("error no data");
//        } else {
//            res.status(200).send({
//                message: "data loaded",
//                data: data
//            })
//        }
//    })
//
//});

AppointmentRoute.post("/", function (req, res) {
  
       var newApp = new Appointment(req.body);
                newApp.save(function (er, data) {
                    if (er) {
                        res.status(500).send({
                            "message": "internal error"
                        });
                    } else {
                        res.status(200).send({
                            "message": "you successfuly made an Appointment"
                        })
                    }
                }); 
    
});


AppointmentRoute.put("/:id", function (req, res) {
    Appointment.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            for (key in req.query) {
                data[key] = req.query[key];
            }
            data.save();
            res.status(200).send("data updated Successfully");
        }
    })
});
AppointmentRoute.delete("/:id", function (req, res) {
    Appointment.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            data.remove();
            res.status(200).send("data deleted Successfully");
        }
    })
});

module.exports = AppointmentRoute;