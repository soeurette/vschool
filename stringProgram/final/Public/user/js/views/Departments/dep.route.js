var app = angular.module("app.Dep", ["ngRoute", "depreq"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/Departments", {
        templateUrl: "/js/views/Departments/dep.tpl.html",
        controller: "depCtrl"
    });
});
app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;

                        console.log(loadEvent.target.result)

                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);


            });
        }
    }
}]);
app.controller("depCtrl", function ($scope, depservice) {
    console.log("departments");
    $scope.userInput = {};
    $scope.departments = [];
    $scope.getdata = function () {
        depservice.getData().then(function (res) {
            $scope.departments = res.data.data
        }, function (err) {
            console.log(err);
        })
    }

    $scope.AdddepBtn = function () {
        console.log($scope.img);
        //        $scope.userInput.image = $scope.fileread;
        //        depservice.postdata($scope.userInput).then(function (res) {
        //            $scope.getdata()
        //        }, function (err) {
        //            console.log(err)
        //        });
    };

});