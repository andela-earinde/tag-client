angular.module('taguser.module')
    .controller("TagController",["$mdSidenav", function($mdSidenav) {
    	
    	this.openSideNav = function() {
    		$mdSidenav('left').toggle();
    	}
    }]);