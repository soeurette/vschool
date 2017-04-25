var express = require("express");
var filesRouter = express.Router();

filesRouter.get("/", function (req, res) {
    res.render("index.html"); //user
});

module.exports = filesRouter;