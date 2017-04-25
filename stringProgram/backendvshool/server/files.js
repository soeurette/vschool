var express = require("express");
var filesRoute = express.Router();


filesRoute.get("/", function (req, res) {
    res.render("index.html");
});


module.exports = filesRoute;