angular.module('taguser.module')
    .controller("TagController",["$mdSidenav","$location", function($mdSidenav, $location) {
        self = this;

    	self.showProgress = false;
    	self.hideSlider = false;
    	
    	self.openSideNav = function() {
    		$mdSidenav('left').toggle();
    	}

    	self.hideSlide = function() {
    		self.hideSlider = true;
    	}
    
        self.showHome = function() {
        	self.hideSlider = false;
        }
    }]);