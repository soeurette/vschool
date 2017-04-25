var express = require("express");
var mongoose = require("mongoose");
var Shop = require("../models/shopSchema.js");
var apiRouter = express.Router();

var adminPriv = require("../middleware/adminPriv.js");
//var userRouter = require("../middleware/userMiddle.js");
//
//apiRouter.use(userRouter);
//so not every user should see athers shop


apiRouter.get("/", function(req, res) {
  if(req.body.privilage == "admin") {
    Shop.find({}, function(err, data) {
      if(err) {
        res.status(500).send({"message": "Err", err: err});
      } else {
        res.status(200).send({"message": "Here is the data", data: data});
      }
    });
  } else {
    Shop.find({username: req.body.username}, function(err, data) {
      if(err) {
        res.status(500).send({"message": "Err", err: err});
      } else {
        res.status(200).send({"message": "Here is the data", data: data});
      }
    });
  }
});
apiRouter.get("/:id", function (req, res) {
    Shop.findone({
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

apiRouter.use(adminPriv);

apiRouter.post("/", function (req, res) {
    var newItem = new Shop(req.body)
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



apiRouter.delete("/:id", function (req, res) {
    Shop.findOne({
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
apiRouter.post("/:id", function (req, res) {
    Shop.findOne({
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
apiRouter.put("/:id", function (req, res) {
    Shop.findOne({
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


module.exports = apiRouter;