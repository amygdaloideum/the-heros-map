import angular from 'angular';

export class redBoxComponent {}

export default angular.module('directives.redBox', [])
  .component('redBox', {
    template: require('./red-box.pug'),
    controller: redBoxComponent
  })
  .name;
