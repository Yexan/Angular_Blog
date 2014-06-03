'use strict';

/* Services */

var blogServices = angular.module('blogServices', ['ngResource']);

// blogServices.factory('Blog', ['$resource',
//   function($resource){
//     return $resource('../rest/:REST/:slug', {}, {
//       query: {method:'GET', params:{REST:'listProc', slug:''}, isArray:false}
//     });
//   }
// ]);
