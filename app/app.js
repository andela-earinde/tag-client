angular.module("TagApp", ['taguser.module',
	                      'ngMaterial',
	                      'ngMessages',
	                      'ngRoutes',])

    .config(["$mdThemingProvider", "$routeProvider", 
    	     function($mdThemingProvider, $routeProvider) {
    	     	$mdThemingProvider.theme('default')
    	     	    .primaryPallete('indigo')
    	     	    .accentPallete('red');

    	     	$routeProvider.when('/', {
    	     		templateUrl: "app/tag-client/templates/first-page.html"
    	     	}).otherwise({
    	     		redirectTo: "/404"
    	     	});

    	     }]);