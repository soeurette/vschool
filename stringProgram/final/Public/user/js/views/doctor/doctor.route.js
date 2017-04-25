var app = angular.module("app.doctor", ["ngRoute", "appreq"]);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/doctor", {
        templateUrl: "/js/views/doctor/doctor.tpl.html",
        controller: "docCtrl"
    });
});

app.controller("docCtrl", function ($scope, appservice) {

    console.log("message");

    $scope.appointments = [];
    $scope.PatientApp = [];

    $scope.loadData = function () {
        appservice.getData().then(function (response) {
            var tempData = response.data.data;
            for (var i = 0; i < tempData.length; i++) {
                $scope.appointments.push({
                    _id: tempData[i]._id,
                    PatientName: tempData[i].PatientName,
                    PhoneNumber: tempData[i].PhoneNumber,
                    Email: tempData[i].Email,
                    departmentName: tempData[i].departmentName,
                    Gender: tempData[i].Gender,
                    reason: tempData[i].reason,
                    time: tempData[i].time,
                    doctorName: tempData[i].doctorName,
                    Diagnoses: tempData[i].Diagnoses,
                    Surgery: tempData[i].Surgery,
                    Disease: tempData[i].Disease,
                    Drugs: tempData[i].Drugs,
                    Treatment: tempData[i].Treatment,
                    Test: tempData[i].Test,
                    Temprature: tempData[i].Temprature,
                    Pressure: tempData[i].Pressure,
                    Smoker: tempData[i].Smoker,
                    Alcohol: tempData[i].Alcohol,
                    NextVisit: tempData[i].NextVisit,
                    Price: tempData[i].Price,
                    Wieght: tempData[i].Wieght,
                    isEdit: false,
                    isEdits: false
                })
            }

        }, function (err) {
            console.log(err.status)
        })
    };


    $scope.show = function (index) {
        $scope.appointments[index].isEdit = !$scope.appointments[index].isEdit;

    };
    $scope.OldShow = function (index) {
        $scope.appointments[index].isEdits = !$scope.appointments[index].isEdits;
    };

    $scope.save = function (id, data) {
        appservice.putdata(id, data).then(function (response) {
            $scope.loadData();
        }, function (response) {
            console.log(response.data);
        });
    };

});