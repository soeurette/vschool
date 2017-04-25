var app = angular.module("app", ["ngRoute", "app.Reg", "app.home", "app.service", "app.Dep", "app.time", "app.appo", "app.admin", "app.asign", "app.Sec", "app.doctor", "app.login", "tokenmodule", "app.desc"]);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/home",

    }).otherwise("/", {
        redirectTo: "/home"
    });
});
app.service("Authinterceptor", function ($q, $location, tokenService) {
    this.request = function (config) {
        var token = tokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    }

    this.responseError = function (response) {
        if (response.status != 200) {
            tokenService.removeToken();
            $location.path("/signin");
        }
        return $q.reject(response);
    };
});

app.config(function ($httpProvider) {

    $httpProvider.interceptors.push("Authinterceptor")

});