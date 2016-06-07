angular.module('llnl.controller.viewsController', [])
    .controller('viewsController', function(ViewService) {
        var $scope = this;

        $scope.$routerOnActivate = function(next, previous) {
            console.log(next);
            return ViewService.getViews()
            .then(function (views) {
                $scope.views = views;
            });
        }
    });