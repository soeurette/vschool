var express = require("express");
var jwt = require("jsonwebtoken");
var authRouter = express.Router();

//import model
var Users = require("../models/usersSchema.js");

//import config
var config = require("../config.js");

authRouter.get("/", function (req, res) {
    Users.find({}, function (err, data) {
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

authRouter.post("/signup", function(req, res) {
  Users.find({username: req.body.username}, function(err, data) {
    if(err) {
      res.status(500).send(err);
    } else if(data.length > 0) {
      res.status(400).send({"message": "Username is taken"});
    } else {
      var newUsers = new Users(req.body);
      newUsers.save(function(err, data) {
        if(err) {
          res.status(500).send(err);
        } else {
          res.status(200).send({"message": "You just signup"});
        }
      });
    }
  });
});

authRouter.post("/signin", function(req, res) {
  Users.findOne({username: req.body.username}, function(err, user) {
    if(err) {
      res.status(500).send(err);
    } else if(user == undefined) {
      res.status(400).send({"message": "Username does not exists"});
    } else if(req.body.password != user.password) {
      res.status(400).send({"message": "Password is wrong"});
    } else {
      //Generate token
      //makes xxxxx.yyyyy.zzzzss
       var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "1h"});

      res.status(200).send({"message": "Here is the key", token: token});
    }
  });
});


module.exports = authRouter;
