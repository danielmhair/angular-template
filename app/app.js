'use strict';

angular.module('myApp', [
  //Bower Dependencies
  'ui.router',

  //Routes
  'myApp.routes',

  //Controllers
  'myApp.controller.rootController',
  'myApp.controller.viewsController',
  'myApp.controller.viewDetailsController',

  //Components
  'bs.component.navbar',
  'myApp.component.rootComponent',
  'myApp.component.views',
  'myApp.component.viewDetails',

  //Services
  'myApp.service.ViewService'
])
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})
//This is where you tell Angular what component is your "Root Component"
.value('$routerRootComponent', 'rootComponent');