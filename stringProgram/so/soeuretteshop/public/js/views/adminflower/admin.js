var app = angular.module("app.adminflower",["ngRoute","requestflowers"]);


app.config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix("");
    $routeProvider.when("/adminflower", {
        templateUrl: "/js/views/adminflower/admin.html",
        controller: "adminsctrl"
    });
});

app.controller("adminsctrl",function($scope,getapi){
    $scope.userInput= {};
     $scope.flowershop = [];
  
    $scope.message="welcome soeurette";
     $scope.postFlower = function(){
        getapi.postData($scope.userInput).then(function(response){
            $scope.loadData()
        },function(err){
            console.log(err)
        });
    };
    
     $scope.loadData = function(){
        getapi.getData().then(function(response){
            $scope.flowershop = response.data.data
        },function(err){
            console.log(err)
        })
    };
      $scope.deleteFlower = function(id){
        getapi.deletedata(id).then(function(response){
            $scope.loadData();
        },function(err){
            console.log(err);
        })
    };
     $scope.toggleEdit = function (index) {
        $scope.flowershop[index].isEdit = !$scope.flowershop[index].isEdit;
    };
    $scope.save = function (id, data) {
        getapi.updateData(id, data).then(function (response) {
            $scope.loadData();
        }, function (response) {
            console.log(response.data);
        });
    };
});