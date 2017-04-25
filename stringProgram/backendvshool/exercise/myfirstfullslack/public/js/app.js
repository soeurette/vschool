var app = angular.module("app", []);

app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/shop");
    }

    this.postData = function (data) {
        return $http.post("http://localhost:8080/shop", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/shop" + id);
    }
    this.editData = function (data) {
        return $http.put("http://localhost:8080/shop" + id, data);
    }
});



app.controller("ctrl", function ($scope, todoService) {
    $scope.data = [];
    $scope.loaddatas = function () {
        todoService.getData().then(
            function (response) {
                console.log(response)
                $scope.data = response.data.data;

            },
            function (error) {
                alert("error status:" + error.status);
            });
    }

    $scope.delete = function (id) {
        todoService.deleteData(id).then($scope.loaddatas, function (error) {
            alert("error status:" + error.status);
        });
    }

    $scope.post = function () {
        var data = {
            type: $scope.input,
            ammount: $scope.input

        };
        todoService.postData(data).then($scope.loaddatas, function (error) {
            alert("error status:" + error.status);
        });
    }

    $scope.edit = function (id, newData) {
        var updatedtask = {
            type: $scope.input,
            ammount: $scope.input
        };
        console.log(newData);
        todoService.editData(id, updatedtask).then($scope.loaddatas, function (error) {
            alert("error status:" + error.status);
        });
    }
});
//if u want to use put in post man u have to put the id then ? for query then the item u whantt to shange