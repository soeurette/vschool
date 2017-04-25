var uuid = require("uuid");

var animals = [{

        id: uuid.v4(),
        name: "snake",
        age: 5,
        isTasty: true
},
    {
        id: uuid.v4(),
        name: "turtle",
        age: 10,
        isTasty: false
}]

module.exports = animals;