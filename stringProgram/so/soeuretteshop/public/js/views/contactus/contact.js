var app = angular.module("app.contact",["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/Contact", {
        templateUrl: "/js/views/contactus/contact.html",
        controller: "contactctrl"
    });
});

app.controller("contactctrl",function($scope){
         
   
});