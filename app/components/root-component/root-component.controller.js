angular.module('llnl.controller.rootController', [])
.controller('rootController', function() {
    var $scope = this;
    $scope.leftLinks = [
        {
            name: 'Root',
            state: 'root'
        },{
            name: 'Views Component',
            state: 'root.views'
        },{
            name: 'View 1 Details Component',
            state: 'root.views.details({id: 1})'
        }
    ];

    $scope.rightLinks = [
        {
            name: 'Github Repo',
            link: 'http://github.com/danielmhair/angular-template'
        }
    ];

    $scope.brand = {
        name: 'Angular Template'
    };
});