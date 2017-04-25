var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var ejs = require("ejs");
var path = require("path");


var filesRoute = require("./files.js");

var apiRouter = require("./api.js");
//setup for server

var app = express();
var Port = process.env.Port || 8080;

mongoose.connect("mongodb://localhost/vote");

//setup my public facing filesRoute

app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup view engine
app.engine("html", ejs.renderFile);

//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(filesRoute);
app.use("/vote", apiRouter);


app.listen(Port, function () {
    console.log("you are runing the server on port: " + Port)
});