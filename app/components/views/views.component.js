angular.module('llnl.component.views', [])
.component('views', {
    templateUrl: 'components/views/views.html',
    controller: 'viewsController',
    $routeConfig: [//Route Config tells what to populate your <ng-outlet> tag with
        {
            path: '/:id', //The path to get to this component
            name: 'ViewDetail', //Name to use when using ng-link="['View1']" as an attribute
            component: 'viewDetail' //The component that this path will use
        }
    ]
});