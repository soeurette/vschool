var app = angular.module("app.asign", ["ngRoute"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/adminsignin", {
        templateUrl: "/js/views/adminsignin/asign.tpl.html",
        controller: "asignctrl"
    });
});

app.controller('asignctrl', ['$scope', 'close', function($scope, close) {


    $scope.close = close;
 

}]);
