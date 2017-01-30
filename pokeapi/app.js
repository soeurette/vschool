var request = require("request");

request('http://pokeapi.co/api/v1/pokemon/25', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data= JSON.parse(body);
      console.log(data["name"]);
      console.log(data["attack"]);
      console.log(data["national_id"]);
      
  }else{
      console.log(error);
      console.log(response.statusCode);
  }
})