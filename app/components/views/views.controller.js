angular.module('llnl.controller.viewsController', [])
    .controller('viewsController', function(ViewService, $stateParams) {
        var $scope = this;

        $scope.$onInit = function() {
            $scope.selectedId = null;

            return ViewService.getViews()
            .then(function (views) {
                $scope.views = views;
                $scope.selectedId = $stateParams.params.id;
            });
        };
    });