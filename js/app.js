'use strict';

/* App Module */

var blogApp = angular.module('blogApp', [
  'ngRoute',
  'ngSanitize',
  'blogAnimations',
  'blogControllers',
  'blogFilters',
  'blogServices',
  'blogDirectives'
]);

blogApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      }).
      when('/article-1', {
        templateUrl: 'partials/article.html',
        controller: 'article1Ctrl'
      }).
      when('/article-2', {
        templateUrl: 'partials/article.html',
        controller: 'article2Ctrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);