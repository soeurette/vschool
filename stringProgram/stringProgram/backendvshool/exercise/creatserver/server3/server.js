var express = require("express");
var bodyParser = require("body-parser");
var students = require("./data.js")

//setup for server
var app = express();
var PORT = process.env.Port || 5000;


//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.status(200).send(students);
})

app.post("/", function (req, res) {
    console.log("I hit the post");
    res.status(200).send({
        "message": "success"
    });
})
app.listen(PORT, function () {
    console.log("you are runinng port :" + PORT);
});