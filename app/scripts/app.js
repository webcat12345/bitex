'use strict';

/**
 * @ngdoc overview
 * @name generatorApp
 * @description
 * # generatorApp
 *
 * Main module of the application.
 */
angular
  .module('generatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountControllerCtrl',
        controllerAs: 'account'
      })      
      .when('/buy_sell', {
        templateUrl: 'views/buysell.html',
        controller: 'BuysellControllerCtrl',
        controllerAs: 'buysell'
      })            
      .when('/deposit', {
        templateUrl: 'views/deposit.html',
        controller: 'DepositControllerCtrl',
        controllerAs: 'buysell'
      })                  
      .when('/withdraw', {
        templateUrl: 'views/withdraw.html',
        controller: 'WithdrawControllerCtrl',
        controllerAs: 'buysell'
      })                        
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
