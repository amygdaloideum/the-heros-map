'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('hmApp.util', [])
  .factory('Util', UtilService)
  .name;
