angular.module('myApp.controller.rootController', [])
.controller('rootController', function($state) {
    var $scope = this;
    $scope.state = $state;
    $scope.leftLinks = [];

    $scope.rightLinks = [
        {
            name: 'Github Repo',
            link: 'http://github.com/danielmhair/angular-template'
        }
    ];

    $scope.brand = {
        name: 'Angular Template',
        state: 'root'
    };
});