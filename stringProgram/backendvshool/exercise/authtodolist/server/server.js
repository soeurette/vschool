var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var ejs = require("ejs");
var path = require("path");
var filesRoute = require("./routes/files.js");


var expressJwt = require("express-jwt");
//setup server

var app = express();
var Port = process.env.Port || 8080;

var config = require("./config.js")


mongoose.connect("mongodb://localhost/" + config.database);

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

//setup routes
var apiRouter = require("./routes/api.js");
var authRouter = require("./routes/auth.js");

app.use("/api", expressJwt({
    secret: config.secret
}));
app.use("/api", apiRouter);

app.use("/auth", authRouter);

app.use(filesRoute);


app.listen(Port, function () {
    console.log("you are runing the server on port: " + Port)
});