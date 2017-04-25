var app = angular.module("app.home", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/views/home.tpl.html",
        controller: "homectrl"

    });
});


app.controller("homectrl", function ($scope) {

});