var express = require("express");
var mongoose = require("mongoose");
var vote = require("./vote.js");
var apiRouter = express.Router();

apiRouter.get("/", function (req, res) {
    vote.find({}, function (err, data) {
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

apiRouter.get("/:id", function (req, res) {
    vote.findone({
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
apiRouter.post("/", function (req, res) {
    var newItem = new vote(req.body)
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
    vote.findOne({
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
    vote.findOne({
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
    vote.findOne({
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