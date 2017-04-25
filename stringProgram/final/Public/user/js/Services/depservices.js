var app = angular.module("depreq", []);

app.service("depservice", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:8080/dep")
    };
    this.postdata = function (data) {
        return $http.post("http://localhost:8080/dep", data)
    };
    this.deletedata = function (id) {
        return $http.delete("http://localhost:8080/dep/" + id)
    };
    this.putdata = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        return $http.put("http://localhost:8080/dep/" + id + "?" + query);
    }
});