// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/areyou', {
            templateUrl: 'views/areyou.html',
            controller: 'areyou'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);