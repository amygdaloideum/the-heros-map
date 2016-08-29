import angular from 'angular';

export class blueBoxComponent {}

export default angular.module('directives.blueBox', [])
  .component('blueBox', {
    template: require('./blue-box.pug'),
    controller: blueBoxComponent
  })
  .name;
