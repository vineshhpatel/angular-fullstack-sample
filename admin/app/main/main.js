'use strict';

angular.module('adminApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'admin/app/main/main.html',
        controller: 'MainCtrl'
      });
  });