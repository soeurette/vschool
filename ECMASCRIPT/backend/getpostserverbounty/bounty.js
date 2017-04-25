var uuid = require("uuid");


var bounties = [
    {
        id: uuid.v4(),
        FirstName: "goko",
        LastName: "kiko",
        Living: true,
        BountyAmount: 50,
        Type: "sith"

    },
    {
        id: uuid.v4(),
        FirstName: "tato",
        LastName: "doda",
        Living: false,
        BountyAmount: 10,
        Type: "jedi"

    },
    {
        id: uuid.v4(),
        FirstName: "sousou",
        LastName: "roro",
        Living: true,
        BountyAmount: 80,
        Type: "sith"

    },
    {
        id: uuid.v4(),
        FirstName: "momo",
        LastName: "fadoti",
        Living: false,
        BountyAmount: 50,
        Type: "jedi"

    }


];
module.exports = bounties;