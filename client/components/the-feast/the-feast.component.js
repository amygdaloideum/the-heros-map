import angular from 'angular';

export class theFeastComponent {}

export default angular.module('directives.theFeast', [])
  .component('theFeast', {
    template: require('./the-feast.pug'),
    controller: theFeastComponent
  })
  .name;
