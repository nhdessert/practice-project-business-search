/**
 * Created by Nathaniel on 6/7/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [

    'myApp.welcome-view',
    'myApp.input-view',
    'myApp.result-view',
    'myApp.map-view'
]);/*.
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/welcome-view'});
    }]);*/