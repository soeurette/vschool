var app = angular.module("app.cart",["ngRoute","requestCart"]);


app.config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix("");
    $routeProvider.when("/cart", {
        templateUrl: "/js/views/cart/cart.tpl.html",
        controller: "cartCtrl"
    });
});

app.controller("cartCtrl",function($scope,getCart){
    $scope.userInput = {};
    $scope.Cart=[];
    $scope.addtocart = function(){
      getCart.postData($scope.userInput).then(function(response){
            $scope.getData();
                          $scope.userInput= {};

      },function(err){
          console.log(err);
      })  
    };
    $scope.getData = function(){
        getCart.getData().then(function(response){
            $scope.Cart = response.data.data;
        },function(err){
            console.log(err)
        })
    };
    $scope.delete = function(id){
        getCart.deletedata(id).then(function(res){
            $scope.getData();
        },function(err){
            console.log(err);
        })
    }
});