'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import ngParallax from 'ng-parallax';
import aos from 'aos';

import uiRouter from 'angular-ui-router';

// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import theMap from '../components/the-map/the-map.component'
import group from '../components/the-map/group.component';
import redBox from '../components/red-box/red-box.component';
import greenBox from '../components/green-box/green-box.component';
import blueBox from '../components/blue-box/blue-box.component';
import theFeast from '../components/the-feast/the-feast.component';
import fleurTheLis from '../components/fleur-the-lis/fleur-the-lis.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('hmApp', [
    ngAnimate,
    ngCookies, ngResource, ngSanitize, uiRouter, ngMaterial, //ngParallax,
    // ngMessages,
    navbar, footer, main, constants, util, theMap, fleurTheLis, redBox, greenBox, blueBox, group, theFeast
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    //skrollr.init();
    angular.bootstrap(document, ['hmApp'], {
      strictDi: true
    });
    aos.init();
  });
