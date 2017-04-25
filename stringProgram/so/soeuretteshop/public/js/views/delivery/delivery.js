var app = angular.module("app.payment",["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/Delivery", {
        templateUrl: "/js/views/delivery/delivery.html",
        controller: "deliveryctrl"
    });
});

app.controller("deliveryctrl",function($scope){
         
   
});