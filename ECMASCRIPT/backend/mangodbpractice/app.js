var mongodb = require("mongodb");

//setup

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/restaurant";

client.connect(url, function (err, db) {
    if (err) {
        console.log(err);
    } else {
        var collection = db.collection("menu");
        collection.insert({
            name: "taco",
            cost: 5000,
            type: "dessert"
        }, function (err, result) {
            collection.find().toArray(function (err, docs) {
                console.log(docs);
                db.close()
            });
        });

    }
});