(function () {
  'use strict';

  angular
    .module('pretty')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
