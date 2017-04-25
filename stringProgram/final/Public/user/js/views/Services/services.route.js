var app = angular.module("app.service", ["ngRoute"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/service", {
        templateUrl: "/js/views/Services/services.tpl.html",
        controller: "servicesctrl"
    });
});

app.controller("servicesctrl", function ($scope) {
    console.log("services");
});