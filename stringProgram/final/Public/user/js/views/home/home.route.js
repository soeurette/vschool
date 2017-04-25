var app = angular.module("app.home",["ngRoute"]);


app.config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix("");
    $routeProvider.when("/home", {
        templateUrl: "/js/views/home/home.tpl.html",
        controller: "home"
    });
});

app.controller("home",function($scope){
console.log("home");
});