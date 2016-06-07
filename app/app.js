'use strict';

angular.module('myApp', [
  //Bower Dependencies
  'ngComponentRouter',

  //Controllers
  'llnl.controller.rootController',
  'llnl.controller.viewsController',
  'llnl.controller.viewDetailsController',

  //Components
  'bs.component.navbar',
  'llnl.component.rootComponent',
  'llnl.component.views',
  'llnl.component.viewDetails',

  //Services
  'llnl.service.ViewService'
])
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})
//This is where you tell Angular what component is your "Root Component"
.value('$routerRootComponent', 'rootComponent');