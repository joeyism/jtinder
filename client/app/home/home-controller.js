"use strict";

angular.module('jtinderApp').controller('HomeCtrl', ['gotinder',function(gotinder){

    gotinder.auth().then(function(result){
        console.log(result);
    });

}]);
