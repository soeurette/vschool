var app = angular.module("myApp" , []);
app.controller("mainCtrl",function($scope ){
    $scope.ar=[];
  $scope.submit = function() {
    $scope.ar.push({picName: $scope.picName , picsubTitle:$scope.picsubTitle , picUrl : $scope.picUrl})
  }
     }

)