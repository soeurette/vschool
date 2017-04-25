var express = require("express");
var bodyParser = require("body-parser");
var animals = require("./animals.js");
var uuid = require("uuid");
var validate = require("./utils.js");

//setup for server
var app = express();
var PORT = process.env.Port || 8080;
// 4 crud requets

//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get("/animals", function (req, res) {
    res.status(200).send(animals);
})

app.post("/animals", function (req, res) {
    var data = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age,
        isTasty: req.body.isTasty

    };
    var didPass = validate(data);
    if (didPass.pass === false) {
        res.status(400).send({
            "message": "data didnt pass"
        })
    } else {
        animals.push(data);
        res.status(200).send({
            "message": "data passed"
        })
    }
});
app.delete("/animals/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < animals.length; i++) {
        if (id == animals[i].id) {
            animals.splice(i, 1)
            res.status(200).send({
                message: "sous deleted the data" + id
            });
        }
    }
    res.status(404).send({
        message: "sous canot delete the data" + id
    });
});

app.put("/animals/:id", function (req, res) {
    var id = req.params.id;
    var data = {
        id: req.params.id,
        name: req.body.name,
        age: req.body.age,
        isTasty: req.body.isTasty
    };
    for (var i = 0; i < animals.length; i++) {
        if (id == animals[i].id) {
            animals[i] = data;
            res.status(200).send({
                message: "sous updated the data" + id
            });
        }
    }
    res.status(404).send({
        message: "sous canot update the data" + id
    });
});

app.listen(PORT, function () {
    console.log("you are runinng port :" + PORT);
});