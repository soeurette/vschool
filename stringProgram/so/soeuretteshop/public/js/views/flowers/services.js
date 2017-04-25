var app = angular.module("app.services",["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/Services", {
        templateUrl: "/js/views/flowers/services.html",
        controller: "serviceCtrl"
    });
});

app.controller("serviceCtrl",function($scope){
         
   
});