import angular from 'angular';

export class FleurTheLisComponent {}

export default angular.module('directives.fleurTheLis', [])
  .component('fleurTheLis', {
    template: require('./fleur-the-lis.pug'),
    controller: FleurTheLisComponent
  })
  .name;
