/**
 * Created by Nathaniel on 6/7/2016.
 */
'use strict';

angular.module('myApp.result-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/result', {
        templateUrl: 'views/result-view/result-view.html',
        controller: 'ResultCtrl'
    });
}])

.controller('ResultCtrl', ['$scope', 'yelpService', function($scope, yelpService) {
}]);