"use strict";

angular.module('jtinderApp').service('gotinder',['$http','$rootScope', function($http, $rootScope){

    var root = "https://api.gotinder.com/";

    var rel = function(path){
        return root+path;
    };

    this.auth = function(){
        var options = {
            method: "POST",
            url: rel("auth"),
            header: {
                "Content-type": "application/json",
                "User-Agent": "Tinder/3.0.4 (iPhone; iOS 7.1; Scale/2.00)",
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify({
                "facebook_token": $rootScope.facebook.token,
                "facebook_id": $rootScope.facebook.id
            })
        };
        console.log(options);
        return $http(options);
    };

}]);
