var app = angular.module("authModel", []);

app.service("authService", function ($http) {

    this.signup = function (data) {
        return $http.post("http://localhost:8080/auth/signup", data);
    };
    this.signin = function (data) {
        return $http.post("http://localhost:8080/auth/signin", data);
    };

});