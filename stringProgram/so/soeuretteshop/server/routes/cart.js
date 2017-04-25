var express = require("express");
var mongoose = require("mongoose");
var Cart = require("../models/cartSchema.js");
var cartRouter = express.Router();


var userRouter = require("../middleware/userMiddle.js");

cartRouter.use(userRouter);

cartRouter.get("/", function(req, res) {
  if(req.body.privilage == "admin") {
    Cart.find({}, function(err, data) {
      if(err) {
        res.status(500).send({"message": "Err", err: err});
      } else {
        res.status(200).send({"message": "Here is the data", data: data});
      }
    });
  } else {
    Cart.find({username: req.body.username}, function(err, data) {
      if(err) {
        res.status(500).send({"message": "Err", err: err});
      } else {
        res.status(200).send({"message": "Here is the data", data: data});
      }
    });
  }
});

cartRouter.get("/:id", function (req, res) {
    Cart.findone({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Data is not loaded",
                err: err
            })
        } else {
            res.status(200).send({
                message: "Data is loaded",
                data: data
            });
        }
    })
});
cartRouter.post("/", function (req, res) {
    var newItem = new Cart(req.body)
    newItem.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            })
        } else {
            res.status(200).send({
                message: "Data is loaded",
                data: data
            });
        }
    })
});


cartRouter.delete("/:id", function (req, res) {
    Cart.findOne({
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
cartRouter.post("/:id", function (req, res) {
    Cart.findOne({
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
            data.comment.push(req.body.comment);
            data.save(function (err, data) {

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
cartRouter.put("/:id", function (req, res) {
    Cart.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            })
        } else if (data == undefined) { // data == undefined
            res.status(404).send({
                message: "no object with id exist"
            });
        } else {

            for (key in req.query) {
                data[key] = req.query[key]
            }
            data.save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: "Error in db",
                        err: err
                    })
                } else {

                    res.status(200).send({
                        message: "data was saved",
                        data: data
                    });
                }

            });

        }

    });

});


module.exports = cartRouter;