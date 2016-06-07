angular.module('llnl.controller.rootController', [])
.controller('rootController', function() {
    var $scope = this;
    $scope.leftLinks = [
        {
            name: 'Home',
            link: '#home'
        }
    ];

    $scope.rightLinks = [
        {
            name: 'Sign In',
            link: '#signin'
        }
    ];

    $scope.brand = {
        name: 'Angular Template',
        link: '/'
    };
});