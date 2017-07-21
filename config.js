var app = angular.module('myModule');

app.config(function($routeProvider) {

  $routeProvider
    .when('/input', {
      controller: 'inputCtrl',
      templateUrl: 'input.html'
    })
    .when('/output', {
      controller: 'outputCtrl',
      templateUrl: 'output.html'
    })
    .when('/home', {
      templateUrl: 'home.html'
    })
    .otherwise ({ redirectTo: '/home' })
});
