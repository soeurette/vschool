var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ejs = require("ejs");
var path = require("path");
var expressJwt = require("express-jwt");

//import config
var config = require("./config.js");

//setup server
var app = express();

//get port
var Port = process.env.Port || 8080;

//setup connection
mongoose.connect("mongodb://localhost/" + config.database);

//setup my public facing files or static files
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
var apiRouter = require("./routes/shop.js");
var cartRouter = require("./routes/cart.js");
var authRouter = require("./routes/auth.js");
var filesRouter = require("./files.js");
var uploadRouter = require("./routes/upload.js");
app.use(uploadRouter);

//check json token

app.use("/shop", expressJwt({secret: config.secret}));

app.use("/auth", authRouter);
app.use("/shop", apiRouter);
app.use("/cart", cartRouter);
app.use(filesRouter);


app.listen(Port, function () {
    console.log("you are runing the server on port: " + Port)
});