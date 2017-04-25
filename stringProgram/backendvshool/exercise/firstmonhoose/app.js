var mongoose = require("mongoose");
var Shop = require("./shop.js");

mongoose.connect("mongodb://localhost/shop");


var vegetable = new Shop({
    type: "coussa",
    ammount: 1,
    isFresh: true

});

vegetable.save(function (err, vegetable) {
    if (err) {
        console.log(err);
    } else {
        Shop.find({}, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});
//we have to put find()inside to show then save without it it will print []

//find{name jameel,function(err,data)}{
//data.remove(),
//    
//    for update data.type = "jameeel", data.save()
//}