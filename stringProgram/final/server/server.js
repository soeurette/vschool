var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.Port || 8080;
var config = require("./config.js");
var ejs = require("ejs");
var path = require("path");
var fileRouter = require("./files.js");



mongoose.connect("mongodb://localhost/Clinic");
//setup the server 
var app = express();

// setup bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// change to see the index.html
app.use(express.static(path.join(__dirname + "\\..\\public\\user")));
app.set("views", __dirname + "\\..\\public\\user\\views");

// parse the engine
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

//use the file to route to index.html

app.use(fileRouter);
// require data
var UsersRoute = require("./routes/usersroute.js");
app.use("/reg", UsersRoute);
var DepartmentsRoute = require("./routes/Dep.js");
app.use("/dep", DepartmentsRoute);
var AppointmentRoute = require("./routes/appointments.js");
app.use("/App", AppointmentRoute);

// setup the port
app.listen(port, function () {
    console.log("iam listening to port " + port)
});