var express = require("express");
var authRouter = express.Router();
var jwt = require("jsonwebtoken")
    //import model

var User = require("../models/user.js");
var config = require("../config.js")

authRouter.post("/signup", function (req, res) {
    User.find({
            username: req.body.username
        },

        function (err, data) {
            if (err) {
                res.status(500).send(err);

            } else if (data.length > 0) {
                res.status(400).send({
                    "message": "username is taken"
                });
            } else {
                var newUser = new User(req.body);
                newUser.save(function (err, data) {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        res.status(200).send({
                            "message": "you signup"
                        });
                    }
                })
            }

        })

});
//authRouter.post("/signin", function (req, res) {
//    User.findOne({
//            username: req.body.username
//        },
//
//        function (err, data) {
//            if (err) {
//                res.status(500).send(err);
//
//            } else if (data == undefined) {
//                res.status(400).send({
//                    "message": "username is taken"
//                });
//            } else if (req.body.password != data.password) {
//                res.status(400).send({
//                    "message": "wrong password"
//                });
//            } else {
//
//                res.status(200).send({
//                    "message": "you sign in"
//                });
//
//            }
//        }
//
//    )
//});
authRouter.post("/signin", function (req, res) {
    User.findOne({
            username: req.body.username
        },

        function (err, user) {
            if (err) {
                res.status(500).send(err);

            } else if (user == undefined) {
                res.status(400).send({
                    "message": "username is taken"
                });
            } else if (req.body.password != user.password) {
                res.status(400).send({
                    "message": "wrong password"
                });
            } else {
                //generate token
                //makes xxxxx.yyyyy.zzzzz
                var token = jwt.sign(user.toObject(), config.secret, {
                    expiresIn: "20m"
                });
                res.status(200).send({
                    "message": "you sign in",
                    token: token
                });

            }
        }

    )
});


module.exports = authRouter;