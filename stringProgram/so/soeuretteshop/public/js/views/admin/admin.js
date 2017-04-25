var app = angular.module("app.admin",["ngRoute","requestflowers","ngFileUpload"]);


app.config(function ($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix("");
    $routeProvider.when("/admin", {
        templateUrl: "/js/views/admin/admin.html",
        controller: "adminctrl"
    });
});

app.controller("adminctrl",function($scope,getapi,Upload, $timeout){
    $scope.userInput= {};
     $scope.flowershop = [];
  
    $scope.message="welcome soeurette";
     $scope.postFlower = function(){
        getapi.postData($scope.userInput).then(function(response){
            $scope.loadData();
                $scope.userInput= {};

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
//     $scope.uploadFiles = function(file, errFiles) {
//    $scope.f = file;
//    $scope.errFile = errFiles && errFiles[0];
//    if (file) {
//      console.log('here');
//      file.upload = Upload.upload({
//        url: "http://localhost:8080/image",
//        data: {file: file}
//      });
//      file.upload.then(function (response) {
//        $timeout(function () {
//          console.log(response.data);
//          file.result = response.data;
//        });
//      }, function (response) {
//        if (response.status > 0) {
//          $scope.errorMsg = response.status + ": " + response.data;
//        }
//      }, function (evt) {
//        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
//      });
//    }
//  }
});