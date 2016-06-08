angular.module('llnl.controller.viewsController', [])
    .controller('viewsController', function(ViewService) {
        var $scope = this;
        var selectedId = null;

        $scope.$routerOnActivate = function(next, previous) {
            console.log(next);
            return ViewService.getViews()
            .then(function (views) {
                $scope.views = views;
                selectedId = next.params.id;
            });
        };

        $scope.isSelected = function(view) {
            return (view.id == selectedId);
        };
    });