var app = angular.module("app.home",["ngRoute"]);


app.config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix("");
    $routeProvider.when("/home", {
        templateUrl: "/js/views/home/home.tpl.html",
        controller: "homeCtrl"
    });
});

app.controller("homeCtrl",function($scope){
         
   
});