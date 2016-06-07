/**
 * Created by Nathaniel on 6/7/2016.
 */
'use strict';

angular.module('myApp.map-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/map', {
        templateUrl: 'views/map-view/map-view.html',
        controller: 'MapCtrl'
    });
}])

.controller('MapCtrl', [function() {

}]);