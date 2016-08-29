'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $mdThemingProvider.theme('dark', 'default')
     .primaryPalette('yellow')
     .dark();
}
