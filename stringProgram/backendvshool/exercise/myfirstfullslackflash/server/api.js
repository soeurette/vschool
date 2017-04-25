var express = require("express");

// note:we can put mongoose before or afterexpress
// but express before express.Router()

var mongoose = require("mongoose");
//load in collection
var shop = require("./shop.js");

//make router for routes
var apiRoute = express.Router();

apiRoute.get("/", function (req, res) {
    apiRoute.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "data is not loaded",
                err: err
            })
        } else {
            res.status(200).send({
                message: "data is loaded",
                data: data
            });
        }
    })

});

apiRoute.post("/", function (req, res) {
    var newItem = new shop(req.body)
    apiRoute.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            })
        } else {
            res.status(200).send({
                message: "data is loaded",
                data: data
            });
        }
    })
});

apiRoute.delete("/:id", function (req, res) {
    shop.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            })
        } else if (req.params.id == undefined) { // data == undefined
            res.status(404).send({
                message: "no object with id exist"
            });
        } else {
            data.remove(function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: "Error in db",
                        err: err
                    })
                } else {
                    res.status(200).send({
                        message: "data was deleted",
                        data: data
                    });
                }

            });

        }
    })

});

apiRoute.put("/:id", function (req, res) {
    shop.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            })
        } else if (req.params.id == undefined) { // data == undefined
            res.status(404).send({
                message: "no object with id exist"
            });
        } else {
            for (key in req.query) {
                data[key] = req.query[key]
            }
            data.save();
            res.status(200).send({
                message: "data was saved",
                data: data
            });
        }

    });

});





module.exports = apiRoute;