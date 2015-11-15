angular.module('App', ['ngRoute', 'App.services', 'App.controllers', 'google-maps'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('', {
            controller: 'PointOfInterestsController',
            templateUrl: 'partials/memorableNOW.html'
        })
        .when('/live', {
            controller: 'PointOfInterestsController',
            templateUrl: 'partials/memorableLIVE.html'
        })
        .otherwise({redirectTo: ''});
    });
