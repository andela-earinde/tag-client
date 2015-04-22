angular.module("taguser.module")
    .factory("FindUserTag", ["$q", "$http", "$localStorage", 
            function($q, $http, $localStorage) {
    	var deferred  = $q.defer();
        if(!$localStorage.tagToken) {
            $localStorage.tagToken = {};
        }      

    	return {
            
            getAllTags: function(param) {
                return $http.get("http://localhost:5000/tags/"+param);
            },

            getAllUsers: function(param) {
                return $http.get("http://localhost:5000/users/"+param);
            },

            loginUser: function(params) {
                return $http.post("http://localhost:5000/users/login", params);
            },

            signupUser: function(params) {
                return $http.post("http://localhost:5000/users/signup", params);   
            },

            storeToken: function(tokin) {
                $localStorage.tagToken.token = tokin;
            }
    	}
    }]);