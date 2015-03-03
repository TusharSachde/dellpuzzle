// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice',
    'mydatabase'
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
        when('/jersey', {
            templateUrl: 'views/jersey.html',
            controller: 'jersey'
        }).
        when('/think', {
            templateUrl: 'views/think.html',
            controller: 'think'
        }).
        when('/certificate', {
            templateUrl: 'views/certificate.html',
            controller: 'certificate'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);