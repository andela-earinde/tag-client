angular.module("TagApp", ['taguser.module',
	                      'ngMaterial',
                          'ngAnimate',
                          'ngAria',
	                      'ngMessages',
	                      'ngRoute',
                          'ngStorage'])

    .config(["$mdThemingProvider", "$routeProvider", 
    	     function($mdThemingProvider, $routeProvider) {
    	     	$mdThemingProvider.theme('default')
    	     	    .primaryPalette('indigo')
    	     	    .accentPalette('pink');

    	     	$routeProvider.when('#/users', {
    	     		templateUrl: "tag-client/app/tag-client/templates/first-page.html",
                    controller: "TagController",
                    controllerAs: "tag"
    	     	})
                .when('#/tags', {
                    templateUrl: "tag-client/app/tag-client/templates/second-page.html",
                    controller: "TagController",
                    controllerAs: "tag"
                })
                .when('#/login', {
                    templateUrl: "tag-client/app/tag-client/templates/login-page.html",
                    controller: "SignupLogin",
                    controllerAs: "slogin"
                })
                .when('#/signup', {
                    templateUrl: "tag-client/app/tag-client/templates/signup-page.html",
                    controller: "SignupLogin",
                    controllerAs: "slogin"
                })
                .when("#/profile", {
                    templateUrl: "tag-client/app/tag-client/templates/profile-page.html",
                    controller: "ProfileCtrl",
                    controllerAs: "prof"
                })
                .otherwise({
    	     		redirectTo: "#/"
    	     	});

    	     }]);