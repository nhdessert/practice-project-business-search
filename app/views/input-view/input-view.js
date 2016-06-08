/**
 * Created by Nathaniel on 6/7/2016.
 */
'use strict';

angular.module('myApp.input-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/input', {
        templateUrl: 'views/input-view/input-view.html',
        controller: 'InputCtrl'
    });
}])

.controller('InputCtrl', ['$scope', '$http', '$window', 'yelpService', function($scope, $http, $window, yelpService) {
    $scope.interest;
    $scope.address;

    $scope.submitInputForm = function(){
        //Verify the input

        //Make data request
        yelpService.makeSearchGetCall($scope.interest, $scope.address).then(function(result){
            $window.location.href = "/#!/result";
        });
    }
}]);