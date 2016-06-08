angular.module('llnl.controller.viewsController', [])
    .controller('viewsController', function(ViewService) {
        var $scope = this;

        $scope.$onInit = function() {
            return ViewService.getViews()
            .then(function (views) {
                $scope.views = views;
            });
        };
    });