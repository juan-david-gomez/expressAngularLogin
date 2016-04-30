'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appApp
 */
app
  .controller('LoginCtrl',['SessionService','$scope',function (SessionService,$scope) {
    var vm = this;
    vm.login = function  () {
    	var loginPromise = SessionService.login($scope.user);
    	console.log(loginPromise);
    	loginPromise.then(function  (data) {
	    	if (data.loginStatus) {
	    		alert('Logueado');
	    	}else{
	    		alert("Error");
	    	}
    	})
    };
    
  }]);
