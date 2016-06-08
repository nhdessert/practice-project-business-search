/**
 * Created by Nathaniel on 6/7/2016.
 */
var myModule = angular.module('myApp.services', []);
myModule.factory('yelpService', ['$http', function($http) {
    var searchData;
    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

    var getSearchQuery = function(term, location){
        var httpMethod = 'GET';
        var url = 'https://api.yelp.com/v2/search';
        var parameters = {
            callback: 'angular.callbacks._0',
            oauth_consumer_key : 'EuvH9i9gocD9gR6NGWrOGw',
            oauth_token : 'Mhp6Ltw-U7p7U1FgB3UxIMqL7HppxP83',
            oauth_nonce : randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            oauth_timestamp : new Date().getTime(),
            oauth_signature_method : 'HMAC-SHA1',
            oauth_version : '1.0',
            size : 'original',
            term: term,
            location: location.replace(" ", "+"),
            responseType: 'json'
        };
        var consumerSecret = 'h-QC2zYaB8G2IHMyeY6uB3kmPsE';
        var tokenSecret = 'crfkUkQsr4LpIvvFHo-fxYEFKns';
        // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
        var encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);
        // generates a BASE64 encode HMAC-SHA1 hash
        var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
            { encodeSignature: false});
        parameters['oauth_signature'] = signature;

        return $http.jsonp(url, {params: parameters}).success(function(response){
            searchData = response.businesses;
            return response.businesses;
        }).error(function(response){
            console.log("It failed!");
        });
    }

    var publicApi = {
        makeSearchGetCall: getSearchQuery,
        getData: searchData
    };

    return publicApi;
}]);