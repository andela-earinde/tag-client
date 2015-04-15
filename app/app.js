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
    	     	    .accentPalette('red');

    	     	$routeProvider.when('/', {
    	     		templateUrl: "app/tag-client/templates/first-page.html"
    	     	}).otherwise({
    	     		redirectTo: "/404"
    	     	});

    	     }]);