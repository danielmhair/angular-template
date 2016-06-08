angular.module('llnl.controller.viewDetailsController', [])
    .controller('viewDetailsController', function(ViewService, $state, $stateParams) {
        var $scope = this;

        $scope.$onInit = function() {
            $scope.id = $stateParams.id;
            return ViewService.getView($scope.id)
            .then(function (view) {
                $scope.view = view;
            });
        };

        $scope.gotoViews = function() {
            $state.go('root.views');
        };
    });