//get and post user informations

var app = angular.module("requestflowers", []);

app.service("getapi", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/shop");
    };

    this.postData = function (data) {
        return $http.post("http://localhost:8080/shop", data);
    };
    this.deletedata = function (id) {
        return $http.delete("http://localhost:8080/shop/" + id)
    };
   
 
    this.updateData = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        return $http.put("http://localhost:8080/shop/" + id + "?" + query);
    }
});