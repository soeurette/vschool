var app = angular.module("app.login", ["ngRoute", "requestsModule"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/login", {
        templateUrl: "/js/views/login/login.tpl.html",
        controller: "loginCtrl"
    });
});

app.controller("loginCtrl", function ($scope, getService, $location) {
    $scope.userInput = {};
    $scope.data = [];
    $scope.submit = function () {
        getService.postdata($scope.userInput).then(function (res) {
            $scope.data = res.data.data;
            alert("you successfully registired with username" + $scope.userInput.userName + "and Password" + $scope.userInput.Password + "thank You")
        }, function (err) {
            console.log(err);
        })
    };
    $scope.move = function () {
        $location.path("/Registier")
    }
});