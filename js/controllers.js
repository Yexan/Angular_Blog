'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('homeCtrl', ['$scope', 'GetJSON', 
  function($scope, GetJSON) {
    $scope.articles = GetJSON.getSomething({JSON: 'article_list.json'}, function(articles){});
  }
]);


blogControllers.controller('articleCtrl', ['$scope', 'GetJSON', '$routeParams', '$location',
  function($scope, GetJSON, $routeParams, $location) {
    $scope.article = GetJSON.getSomething({JSON: $routeParams.slug+'.json'}).$promise.then(function(data) { $scope.article = data; }, function(error){ $location.path('/'); });

  }
]);