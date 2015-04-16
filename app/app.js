angular.module("TagApp", ['taguser.module',
	                      'ngMaterial',
                          'ngAnimate',
                          'ngAria',
	                      'ngMessages',
	                      'ngRoute'])

    .config(["$mdThemingProvider", "$routeProvider", 
    	     function($mdThemingProvider, $routeProvider) {
    	     	$mdThemingProvider.theme('default')
    	     	    .primaryPalette('indigo')
    	     	    .accentPalette('pink');

    	     	$routeProvider.when('/users', {
    	     		templateUrl: "app/tag-client/templates/first-page.html"
    	     	})
                .when('/tags', {
                    templateUrl: "app/tag-client/templates/second-page.html"
                })
                .when('/login', {
                    templateUrl: "app/tag-client/templates/login-page.html"
                })
                .when('/signup', {
                    templateUrl: "app/tag-client/templates/signup-page.html"
                })
                .otherwise({
    	     		redirectTo: "/"
    	     	});

    	     }]);