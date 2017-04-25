var app = angular.module("requestsModule", []);

app.service("getService", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:8080/reg")
    };
    this.postdata = function (data) {
        return $http.post("http://localhost:8080/reg/signup", data)
    };
    this.deletedata = function (id) {
        return $http.delete("http://localhost:8080/reg/signup" + id)
    };
    this.putdata = function (id, newdata) {
        return $http.put("http://localhost:8080/reg/signup" + id, newdata)
    };
    this.postSignin = function () {
        return $http.post("http://localhost:8080/reg/signin", data)

    };
});