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

        self.showDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                template: "<p>I don't do shit</p>",
                targetEvent: ev
            })
        }

    }]);