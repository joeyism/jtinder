"use strict";

angular.module('jtinderApp').service('gotinder',['$http','$rootScope', function($http, $rootScope){

    var root = "https://api.gotinder.com/";

    var rel = function(path){
        return root+path;
    };

    this.auth = function(){
        return $http.post(rel("/auth"));
    };

}]);
