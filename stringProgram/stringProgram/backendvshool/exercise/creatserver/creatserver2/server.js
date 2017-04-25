var http = require("http");
var fs = require("fs");
//fs=file system
var filePath = "./index.html";
var server = http.createServer(function (request, response) {
    console.log("I dont know what to expect");
    fs.readFile(filePath, "binary", function (err, file) {
        if (err) {
            console.log(err);
            response.writeHeader(500, {
                "Content-Type": "text/html"
            });
            response.write(err);
            response.end();
        } else {
            response.writeHeader(200, {
                "Content-Type": "text/html"
            });
            response.write(file, "binary");
            response.end();
        }
    });


}).listen(8080);