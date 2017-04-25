var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


//setup server
var app = express();
var Port = process.env.Port || 8080;

var student = require("./model.js")
mongoose.connect("mongodb://localhost/student")

//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//middleware example have to be here
//app.use(function (req, res, next) {
//    if (req.body.name == "moustafa") {
//        res.status(400).send({
//            "message": "you cant use this name"
//        });
//    } else {
//        next();
//    }
//
//})
app.use(function (req, res, next) {
    var date = new Date();
    req.body.date = date.toLocaleDateString();
    var time = new Date();
    req.body.time = time.toLocaleTimeString();
    next();

})

app.get("/", function (req, res) {
    student.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Data is not loaded",
                err: err
            })
        } else {
            res.status(200).send(
                data
            );
        }
    })
});
app.post("/", function (req, res) {
    newStudent = new student(req.body);
    newStudent.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            })
        } else {
            res.status(200).send({
                message: "Data is loaded",
                data: data
            });
        }
    })
});



app.listen(Port, function () {
    console.log("you are runing the server on port: " + Port)
});