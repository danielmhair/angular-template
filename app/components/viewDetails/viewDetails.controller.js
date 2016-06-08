angular.module('llnl.controller.viewDetailsController', [])
    .controller('viewDetailsController', function(ViewService) {
        var $scope = this;

        $scope.$routerOnActivate = function(next, previous) {
            // Get the hero identified by the route parameter
            var id = next.params.id;
            return ViewService.getView(id)
            .then(function (view) {
                $scope.view = view;
            });
        };

        $scope.gotoViews = function() {
            $scope.$router.navigate(['Views']);
        };
    });