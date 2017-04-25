var express = require("express");
var UsersRoute = express.Router();
var User = require("../models/users.js");
var jwt = require("jsonwebtoken");
var config = require("../config.js");
UsersRoute.get("/", function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                "message": "sucess",
                data: data
            })
        }
    });
});

UsersRoute.post("/signup", function (req, res) {
    User.find({
        userName: req.body.userName
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                "message": "error in data"
            });
        } else {
            if (data.length > 0) {
                res.status(400).send({
                    "message": "username already taken"
                });
            } else {
                var newUser = new User(req.body);
                newUser.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "message": "internal error"
                        });
                    } else {
                        res.status(200).send({
                            "message": "you successfuly signed up"
                        })
                    }
                });
            }
        }
    });
});
UsersRoute.post("/signin", function (req, res) {
    User.findOne({
        userName: req.body.userName
    }, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else if (req.body.password != user.password) {
            res.status(400).send({
                "message": "password error"
            });
        } else if (user == undefined) {
            res.status(400).send({
                "message": "missing data"
            })
        } else {
            var token = jwt.sign(user.toObject(), config.secret, {
                expiresIn: "1h"
            });

            // Send the token back to the client app.
            res.status(200).send({
                "message": "here is the key",
                token: token
            });
        }
    });
});


UsersRoute.put("/:id", function (req, res) {
    User.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            for (key in req.query) {
                data[key] = req.query[key];
            }
            data.save();
            res.status(200).send("data updated Successfully");
        }
    })
});
UsersRoute.delete("/:id", function (req, res) {
    User.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            data.remove();
            res.status(200).send("data deleted Successfully");
        }
    })
});

module.exports = UsersRoute;