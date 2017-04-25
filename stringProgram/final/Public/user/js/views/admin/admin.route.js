var app = angular.module("app.admin", ["ngRoute", 'ngAnimate', 'angularModalService', 'depreq']);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/admin", {
        templateUrl: "/js/views/admin/admin.tpl.html",
        controller: "adminctrl"
    });
});

app.controller("adminctrl", function ($scope, $location, ModalService, depservice) {
    console.log("welcome Admin");
    //    $location.path = '/admin/views/index.html';
    //   $location.path("/adminsignin");
    //     $scope.showComplex = function() {
    //
    //    ModalService.showModal({
    //      templateUrl: "adminsignin/asign.tpl.html",
    //      controller: "asignctrl",
    //      bodyClass: "custom-modal-open"
    //    }).then(function(modal) {
    //      modal.close.then(function(result) {
    //        $scope.customResult = "All good!";
    //      });
    //    });
    //
    //  };

    $scope.userInput = {};
    $scope.departments = [];

    $scope.getdata = function () {
        depservice.getData().then(function (response) {
            var tempData = response.data.data;
            for (var i = 0; i < tempData.length; i++) {
                $scope.departments.push({
                    _id: tempData[i]._id,
                    departmentName: tempData[i].departmentName,
                    doctorName: tempData[i].doctorName,
                    speciallity: tempData[i].speciallity,
                    floor: tempData[i].floor,
                    isEdit: false
                })
            }

        }, function (err) {
            console.log(err.status)
        })
    }

    $scope.AdddepBtn = function () {
        depservice.postdata($scope.userInput).then(function (res) {
            $scope.getdata()
        }, function (err) {
            console.log(err)
        });
    };
    $scope.show = function () {
        $scope.clicked = true;
    };

    $scope.toggleEdit = function (index) {
        $scope.departments[index].isEdit = !$scope.departments[index].isEdit;
    };
    $scope.save = function (id, data) {
        depservice.putdata(id, data).then(function (response) {
            $scope.getdata();
        }, function (response) {
            console.log(response.data);
        });
    };
    $scope.delete = function (id) {
        depservice.deletedata(id).then(function (response) {
            $scope.getdata();
        }, function (err) {
            console.log(err.status)
        });
    };



});