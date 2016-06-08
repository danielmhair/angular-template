angular.module('llnl.component.rootComponent', [])
.component('rootComponent', {
    templateUrl: 'components/root-component/root-component.html',
    controller: 'rootController',
    $routeConfig: [         //Route Config is the configuration for the <ng-outlet> tag you put in your HTML
        {
            path: '/views/...', //The path to get to this component
            name: 'Views', //Name to use when using ng-link="['Views']" as an attribute
            component: 'views',
            useAsDefault: true
        }
    ]
});