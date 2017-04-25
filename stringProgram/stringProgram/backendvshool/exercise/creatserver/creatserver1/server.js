var http = require("http");
var server = http.createServer(function (request, response) {
    console.log("I dont know what to expect");
    response.writeHeader(200, {
        "Content-Type": "text/plain"
    });
    response.write("hello programmers");
    response.end();

}).listen(8080);