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

.controller('InputCtrl', [function() {

}]);