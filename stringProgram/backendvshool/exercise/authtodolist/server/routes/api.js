var express = require("express");
var apiRouter = express.Router();
var Todo = require("../models/todoShema.js");


apiRouter.get("/", function (req, res) {
    Todo.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Data is not loaded",
                err: err
            })
        } else {
            res.status(200).send(
                data
            );
        }
    })
});
apiRouter.post("/", function (req, res) {
    newitemtodo = new Todo(req.body);
    newitemtodo.save(function (err, data) {
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

apiRouter.put("/:id", function (req, res) {
    Todo.findOne({
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
apiRouter.delete("/:id", function (req, res) {
    Todo.findOne({
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

            data.remove();
            res.status(200).send({
                message: "data was saved",
                data: data
            });
        }

    });

});
module.exports = apiRouter;