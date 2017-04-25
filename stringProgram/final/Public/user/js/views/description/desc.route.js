var app = angular.module("app.desc", ["ngRoute"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/description", {
        templateUrl: "/js/views/description/desc.tpl.html",
        controller: "descCtrl"
    });
});