var app = angular.module("app.appo", ["ngRoute","appreq"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/Appointments", {
        templateUrl: "/js/views/appointments/app.tpl.html",
        controller: "appctrl"
    });
});

app.controller("appctrl", function ($scope,appservice) {
    $scope.appointments = [];
    $scope.userInput={};
    $scope.makeApp = function(){
        console.log("hi ")
     appservice.postdata($scope.userInput).then(function(res){
            alert("you just made an appointment we will call you to confirm the appointment")
        },function(err){
            console.log(err)
        });
    }
       $scope.getData = function(){
        appservice.getData().then(function(res){
            $scope.appointments = res.data.data;
        },function(err){
            console.log(err)
        });
    }
});
