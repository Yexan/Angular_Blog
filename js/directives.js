'use strict';

/* Directives */

var blogDirectives = angular.module('blogDirectives', []);

// blogDirectives.directive('scrollToTarget', function() {
//   return {
//     restrict: 'A',
//     link: function(scope, $element, attrs) {
//       var value = attrs.scrollToTarget;

//       $element.click(function() {
//         var selector = "[id='"+ value +"']";
//         var element = $(selector);
//         $("body").animate({scrollTop: element[0].offsetTop}, 1600);
//       });
//     }
//   }
// });