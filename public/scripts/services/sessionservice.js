'use strict';

/**
 * @ngdoc service
 * @name angularApp.SessionService
 * @description
 * # SessionService
 * Service in the angularApp.
 */
app
  .service('SessionService',['$http','$q',  function ($http,$q) {
    var sessionData = {
    	user:'',
    	loginStatus:false,
    	token : '0'
    };
    var defered = $q.defer();
    this.login = function  (user) {
    	var $promise = $http.post("api/login",{email:user.email,clave:user.clave});

    	$promise
    		.success(function(data, status, headers, config) {
			   sessionData.user = data.user;
			   sessionData.loginStatus = data.loginStatus;
			   sessionData.token = data.token;

			   defered.resolve(sessionData); 
			})
		  	.error(function(data, status, headers, config) {
			   sessionData.user = data.user;
			   sessionData.loginStatus = data.loginStatus;
			   sessionData.token = data.token;	

			   defered.resolve(sessionData); 
		  	});
		return defered.promise;

    }

    this.getUser = function(){
        return sessionData.user;
    };

    this.getToken = function(){
        return sessionData.token;
    };

    this.getUserAuthenticated = function(){
        return sessionData.loginStatus;
    };

  }]);
