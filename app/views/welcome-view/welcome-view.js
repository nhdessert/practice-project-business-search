/**
 * Created by Nathaniel on 6/7/2016.
 */
'use strict';

angular.module('myApp.welcome-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'views/welcome-view/welcome-view.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.getStarted = function() {
        $window.location.href = "/#!/input";
    }
}]);