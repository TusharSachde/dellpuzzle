// JavaScript Document
var firstapp = angular.module('firstapp', ['ngRoute', 'phonecatControllers', 'templateservicemod', 'navigationservice', 'mydatabase', 'ngDraggable', 'ngTouch','ui.bootstrap']);

firstapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            template: hometemplate,
            controller: 'home'
        }).
        when('/areyou', {
            template: areyoutemplate,
            controller: 'areyou'
        }).
        when('/dots', {
            templateUrl: "views/dots.html",
            controller: 'dots'
        }).
        when('/message', {
            template: messagetemplate,
            controller: 'message'
        }).
        when('/next', {
            template: nexttemplate,
            controller: 'next'
        }).
        when('/jersey', {
            template: jerseytemplate,
            controller: 'jersey'
        }).
        when('/think', {
            template: thinktemplate,
            controller: 'think'
        }).
        when('/select', {
            template: selecttemplate,
            controller: 'select'
        }).
        when('/certificate', {
            template: certitemplate,
            controller: 'certificate'
        }).
        when('/sync', {
            template: synctemplate,
            controller: 'sync'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);
firstapp.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);