angular.module('llnl.component.viewDetails', [])
.component('viewDetails', {
    templateUrl: 'components/viewDetails/viewDetails.html',
    bindings: { $router: '<' },
    controller: 'viewDetailsController'
});