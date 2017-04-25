var express = require("express");
var DepartmentsRoute = express.Router();
var Departments = require("../models/departments.js");

DepartmentsRoute.get("/", function (req, res) {
    Departments.find({}, function (err, data) {
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

DepartmentsRoute.post("/", function (req, res) {
    Departments.find({
        departmentName: req.body.departmentName
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error in data"
            });
        } else {
            if (data.length > 0) {
                res.status(400).send({
                    "message": "Departmentsname already taken"
                });
            } else {
                var newDepartments = new Departments(req.body);
                console.log(req.body)
                newDepartments.save(function (er, data) {
                    if (er) {
                        res.status(500).send({
                            "message": "internal error"
                        });
                    } else {
                        res.status(200).send({
                            "message": "you successfuly signed up"
                        })
                    }
                });
            }
        }
    });
});


DepartmentsRoute.put("/:id", function (req, res) {
    Departments.findOne({
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
DepartmentsRoute.delete("/:id", function (req, res) {
    Departments.findOne({
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

module.exports = DepartmentsRoute;