var app = angular.module("app", []);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/vote");
    };

    this.postData = function (data) {
        return $http.post("http://localhost:8080/vote", data);
    };
    this.deletedata = function (id) {
        return $http.delete("http://localhost:8080/vote/" + id)
    };
    //    this.editData = function (data) {
    //        return $http.put("http://localhost:8080/vote/" + id, data);
    //    };
    this.postcomment = function (id, comment) {
        var data = {
            comment: comment
        }
        return $http.post("http://localhost:8080/vote/" + id, data);
    }
    this.updateData = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }

        return $http.put("http://localhost:8080/vote/" + id + "?" + query);
    }
});

app.controller("controller", function ($scope, todoService) {

    $scope.data = [];

    $scope.loaddatas = function () {
        todoService.getData().then(function (response) {
            $scope.data = [];

            for (var i = 0; i < response.data.data.length; i++) {
                $scope.data.push({
                    _id: response.data.data[i]._id,
                    name: response.data.data[i].name,
                    description: response.data.data[i].description,
                    like: response.data.data[i].like,
                    comment: response.data.data[i].comment,
                    isShowingComments: false,
                    isShowingEdit: false
                });

            }


        }, function (error) {
            console.log(error.status);
        });

    }



    $scope.delete = function (id) {
        todoService.deletedata(id).then($scope.loaddatas, function (error) {
            console.log(error.status)
        })


    };
//    $scope.deletecom = function ($index) {
           //        todoService.deletedata($index).then($scope.loaddatas, function (error) {
           //            
           //            console.log(error.status)
           //        })
           //
           //
           //    };
    $scope.post = function () {
        var data = {
            name: $scope.name,
            description: $scope.description,
            like: 0,
            comment: []


        };
        todoService.postData(data).then($scope.loaddatas, function (error) {
            alert("error status:" + error.status);
        });
        $scope.name = "";
        $scope.description = "";

    }

    //    $scope.edit = function (id, newData) {
    //        var updatedtask = {
    //            like: $scope.counter
    //
    //        };
    //        console.log(newData);
    //        todoService.editData(id, updatedtask).then($scope.loaddatas, function (error) {
    //            alert("error status:" + error.status);
    //        });
    //    }
    $scope.editData = function () {
        $scope.refresh = function () {
            var newData = {
                like: $scope.counter
            }
        }
    }


    $scope.likes = function (id, like) {
        //        var like = $scope.data[index].like
        var data = {
            like: like + 1
        }
        todoService.updateData(id, data).then($scope.loaddatas, function (error) {
            console.log(error.status);
        });
    };
    $scope.dislike = function (id, like) {
        //        var like = $scope.data[index].like
        var data = {
            like: like - 1
        }
        todoService.updateData(id, data).then($scope.loaddatas, function (error) {
            console.log(error.status);
        });

    };

    $scope.addComment = function (id, obj) {

        todoService.postcomment(id, obj.comment).then($scope.loaddatas, function (error) {
            console.log(error.status);
        });
        obj.comment = " ";
    };

    //    $scope.refresh = function (index) {
    //        var data = {
    //            like: 0
    //        }
    //        todoService.updateData($scope.data[index]._id, data).then($scope.loaddatas, function (error) {
    //            console.log(error.status);
    //        });
    //
    //    };

});



//if u want to use put in post man u have to put the id then ? for query then the item u whantt to shange