var app =angular.module("app.shop",["ngRoute","requestflowers"]);


app.config(function($routeProvider) {
    $routeProvider.when("/shop", {
       templateUrl: "/js/views/shop/shop.tpl.html",
        controller: "shopctrl"
    });
});


app.controller("shopctrl",function($scope, getapi,$location){
   $scope.userInput = {}; 
    $scope.flowershop = [];
      $scope.loadData = function () {
        getapi.getData().then(function (response) {
            var newdata = response.data.data;
            //if i put object {"message" : "suc" , data : data} then in angular it should be only response.data.data
            // if only i put data then response.data
            for (var i = 0; i < newdata.length; i++) {
                $scope.flowershop.push({
                    _id: newdata[i]._id,
                    name: newdata[i].name,
                    cost: newdata[i].cost,
                    description: newdata[i].description,
                    isEdit: false
                });
            }
        }, function (response) {
            console.log(response.status);
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
    $scope.addtoCart = function(){
        $location.path("/cart");
    }

});
