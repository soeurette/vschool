var app = angular.module("requestCart", []);

app.service("getCart", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/cart");
    };

    this.postData = function (data) {
        return $http.post("http://localhost:8080/cart", data);
    };
    this.deletedata = function (id) {
        return $http.delete("http://localhost:8080/cart/" + id)
    };
 
    this.updateData = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        return $http.put("http://localhost:8080/cart/" + id + "?" + query);
    }
});