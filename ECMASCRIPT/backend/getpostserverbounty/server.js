var express = require("express");
var bodyParser = require("body-parser");
var bounties = require("./bounty.js");
var uuid = require("uuid");

//setup for server
var app = express();
var PORT = process.env.Port || 8080;
// 4 crud requets

//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get("/bounty", function (req, res) {
    res.status(200).send(bounties);
})

app.post("/bounty", function (req, res) {
    if (req.body.FirstName == undefined || req.body.FirstName == "") {
        res.status(400).send({
            "message": "Must have FirstName"
        })
    } else if (req.body.LastName == undefined || req.body.LastName == "") {

        res.status(400).send({
            "message": "Must have LastName"
        })

    } else {
        var data = {
            id: uuid.v4(),
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Living: req.body.Living,
            BountyAmount: req.body.BountyAmount,
            Type: req.body.Type

        }
    }

    console.log("I hit the post");
    bounties.push(data);
    res.status(200).send({
        "message": "success"
    });
});


app.delete("/bounty/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < bounties.length; i++) {
        if (id == bounties[i].id) {
            bounties.splice(i, 1)
            res.status(200).send({
                "message": "you have deleted the item with id" + id
            });
        }
    }

});


app.listen(PORT, function () {
    console.log("you are runinng port :" + PORT);
});