angular.module('taguser.module')
    .controller("TagController",["$mdSidenav","$location", "$mdDialog", 
                 function($mdSidenav, $location, $mdDialog) {

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

        //Handle login here, move this to another contoller when this starts 
        // becoming messy
        self.email = "";
        self.pasword = "";

        //Handle signup here, move this to another conroller when this starts
        //becoming messy
        self.emailSign = "";
        self.passSign = "";
        self.usersign = ""
        self.noSpace = /^[a-zA-Z_]+$/;
 
    }]);