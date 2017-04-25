var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var ejs = require("ejs");
var path = require("path");

var filesRoute = require("./files.js");

var apiRoute = require("./api.js");
//setup for server
var app = express();
var PORT = process.env.Port || 8080;

mongoose.connect("mongodb://localhost/shop");

//setup my public facing files

app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");
app.set("view engine", "ejs");

//setup view engine
app.engine("html", ejs.renderFile);



//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(filesRoute);
app.use("/shop", apiRoute);


app.listen(PORT, function () {
    console.log("you are runinng port :" + PORT);
});