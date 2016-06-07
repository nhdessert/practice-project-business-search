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

.controller('InputCtrl',  ['$scope', function($scope) {
    $scope.interest;
    $scope.address;

    $scope.submitInputForm = function(){
        console.log('I am interested in ' + $scope.interest + ' and I live at ' + $scope.address );
    }
}]);