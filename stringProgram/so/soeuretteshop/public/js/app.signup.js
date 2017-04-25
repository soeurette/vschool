var app = angular.module("app.signup", ["ngRoute", "authModel"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/signup", {
        templateUrl: "js/signup.tpl.html",
        controller: "signupctrl"

    });
});



app.controller("signupctrl", function ($scope, authService) {
    
    $scope.userInput = {};
    $scope.data = [];
    $scope.signup = function () {
        authService.signup($scope.userInput).then(function (response) {
            $scope.data = response.data.data;
            alert("you have just signed up")
        }, function (err) {
            console.log(err);
        })

    };


});