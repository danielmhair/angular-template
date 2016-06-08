angular.module('myApp.routes', [])
.config(function ($stateProvider) {
    $stateProvider
    .state('root', {
        url: '/',
        template: '<root-component></root-component>',
        controller: 'rootController'
    })
    .state('root.views', {
        url: 'views',
        template: '<views></views>',
        controller: 'viewsController'
    })
    .state('root.views.details', {
        url: '/:id',
        template: '<view-details></view-details>',
        controller: 'viewDetailsController'
    })
});