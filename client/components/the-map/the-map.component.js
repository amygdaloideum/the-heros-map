'use strict';

import pieces from '../../assets/pieces';
import groups from '../../assets/groups';

export class theMapComponent {
  $onInit() {

  }
}

export default angular.module('directives.theMap', [])
  .component('theMap', {
    template: require('./the-map.pug'),
    controller: theMapComponent
  })
  .name;
