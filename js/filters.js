'use strict';

/* Filters */

var blogFilters = angular.module('blogFilters', []);

/* 
blogFilters.filter('content_check', function() {
   return function(input) {
     return (null == input) ? 'Pas de contenu' : input;
	};
});
*/

blogFilters.filter('array', function() {
  return function(items) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
   return filtered;
  };
});