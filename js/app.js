angular.module('App', ['ngRoute', 'App.services', 'App.controllers'])
      .config(['$compileProvider', function ($compileProvider) {
        //  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|chrome-extension):/);
         $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http|ftp|mailto|file|tel|chrome-extension):/); // ***newwer version
     }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'PointOfInterestsController',
            templateUrl: 'partials/memorableNOW.html'
        })
        .when('/live', {
            controller: 'PointOfInterestsController',
            templateUrl: 'partials/memorableLIVE.html'
        })
        .otherwise({redirectTo: '/'});
    });
