var app = angular.module("appreq", []);

app.service("appservice", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:8080/App")
    };
    this.postdata = function (data) {
        console.log(data)
        return $http.post("http://localhost:8080/App", data)
    };
    this.deletedata = function (id) {
        return $http.delete("http://localhost:8080/App/" + id)
    };
    this.putdata = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        return $http.put("http://localhost:8080/App/" + id + "?" + query);
    }
});