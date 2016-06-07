'use strict';

angular.module('myApp', [
  'ngComponentRouter',
  'llnl.component.app',
  'bs.component.navbar',
  'bs.component.thumbnail',
  'llnl.service.PersonService'
])
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})
.value('$routerRootComponent', 'llnlApp');