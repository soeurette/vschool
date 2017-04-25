var app = angular.module("app.Reg", ["ngRoute", "requestsModule"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/Registier", {
        templateUrl: "/js/views/Registier/reg.tpl.html",
        controller: "RegistierCtrl"
    });
});

app.controller("RegistierCtrl", function ($scope, getService) {
    $scope.userInput = {};
    $scope.data = [];
    $scope.submit = function () {
        getService.postdata($scope.userInput).then(function (res) {
            $scope.data = res.data.data;
            alert("you successfully registired with username" + $scope.userInput.userName + "and Password" + $scope.userInput.Password + "thank You")
        }, function (err) {
            console.log(err);
        })
    }
});