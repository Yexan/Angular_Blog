'use strict';

/* Services */

var blogServices = angular.module('blogServices', ['ngResource']);

blogServices.factory('GetJSON', ['$resource',
  function($resource){
    return $resource('./json/:JSON', {}, {
      getSomething: {method:'GET', params:{JSON:'article_list.json'}, isArray:true}
    });
  }
]);

