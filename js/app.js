'use strict';

/* App Module */

var blogApp = angular.module('blogApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'blogAnimations',
  'blogControllers',
  'blogFilters',
  'blogServices',
  'blogDirectives'
]);

blogApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      }).
      when('/:slug', {
        templateUrl: 'partials/article.html',
        controller: 'articleCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  }]);