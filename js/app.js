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
        when('/dots', {
            templateUrl: 'views/dots.html',
            controller: 'dots'
        }).
        when('/message', {
            templateUrl: 'views/message.html',
            controller: 'message'
        }).
        when('/next', {
            templateUrl: 'views/next.html',
            controller: 'next'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);