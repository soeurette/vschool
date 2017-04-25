var app = angular.module("app.signin", ["ngRoute", "authModel","tokenModule"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/signin", {
        templateUrl: "/js/signin.tpl.html",
        controller: "signinctrl"

    });
});



app.controller("signinctrl", function ($scope, authService, $location,TokenService) {

    $scope.userInput = {};
    $scope.data = [];
    $scope.signin = function() {
    authService.signin($scope.userInput).then(function(response) {
     $location.path("/home");
        alert("you have just signed in ")
      TokenService.save(response.data.token);
      $scope.userinput = {};
    }, function(response) {
      console.log(response.status);
    })
  };



})