var app = angular.module("app.time", ["ngRoute"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/timeTable", {
        templateUrl: "/js/views/timtable/timetable.tpl.html",
        controller: "timeCtrl"
    });
});

app.controller("timeCtrl", function ($scope) {
    console.log("timeCtrl");
});