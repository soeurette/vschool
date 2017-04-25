var app = angular.module("app.Sec", ["ngRoute",'appreq']);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/Secretary", {
        templateUrl: "/js/views/Secretary/Sec.tpl.html",
        controller: "Secctrl"
    });
});

app.controller("Secctrl",function($scope,appservice){
   
    
    
    $scope.appointments = [];
    
    $scope.loadData = function(){
        appservice.getData().then(function(res){
            $scope.appointments = res.data.data;
        },function(err){
            console.log(err)
        });
    };
      $scope.delete = function(id){
        appservice.deletedata(id).then(function(response){
            $scope.loadData();
        },function(err){
            console.log(err.status)
        });
    };
//    $scope.confirm = function (id, newdata) {
        //        appservice.putdata(id,newdata).then(function(response){
        //            $scope.loadData();
        //        },function(err){
        //            console.log(err.status)
        //        });
        //    };
    
});