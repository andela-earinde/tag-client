angular.module('taguser.module')
    .controller("TagController",["$mdSidenav","$location", "$mdDialog",
                                  "FindUserTag","$scope", "$timeout","$window",
                 function($mdSidenav, $location, $mdDialog,
                          FindUserTag, $scope, $timeout, $window) {

        self = this;

    	self.showProgress = false;
        self.hideSlider = false;
    
    	self.openSideNav = function() {
    		$mdSidenav('left').toggle();
    	}

        //watch for change in location
        $scope.$on("$locationChangeStart", function(event) {
            if($location.path() === "/") {
                self.hideSlider = false;
            }
            else {
                self.hideSlider = true
            }
        });

        self.reloadHome = function() {
            $window.location.reload();
        }


        //Find tags controller
        self.tags = "";
        self.getTags = [];
        var defer = "";
        self.submitTagForm = function() {
            console.log("called");
            defer = FindUserTag.getAllTags("all");
            $timeout(function(){
                defer.then(function(response) {
                    self.getTags = response.data;
                    console.log(self.getTags);
                });
            }, 3000);
        }

        //find Users controller
        self.users = "";
        self.getUsers = [];
        var deferUser = "";
        self.submitUserForm = function() {
            deferUser = FindUserTag.getAllUsers("all");
             $timeout(function(){                  
                deferUser.then(function(response) {
                    self.getUsers = response.data;
               });   
            }, 3000);
        }
        
    }]);



