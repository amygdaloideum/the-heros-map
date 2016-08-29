import angular from 'angular';

export class greenBoxComponent {}

export default angular.module('directives.greenBox', [])
  .component('greenBox', {
    template: require('./green-box.pug'),
    controller: greenBoxComponent
  })
  .name;
