'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('homeCtrl', ['$scope', 
  function($scope) {
    $scope.articles = [
    	{
	    	'titre': 'Article 1',
	    	'lien': 'article-1',
	   		'date': '03/06/2014',
	     	'description': 'Premier article posté sur le blog le 03/06/2014 !'
	 	},
	 	{
	    	'titre': 'Article 2',
	    	'lien': 'article-2',
	   		'date': '04/06/2014',
	     	'description': 'Deuxième article posté sur le blog le 04/06/2014 !'
	 	}
    ];
  }
]);

blogControllers.controller('article1Ctrl', ['$scope', 
  function($scope) {
    $scope.article = [
    	{
	    	'titre': 'Article 1',
	   		'date': '03/06/2014',
	     	'description': 'Premier article posté sur le blog le 03/06/2014 !'
	 	}
    ];
  }
]);


blogControllers.controller('article2Ctrl', ['$scope', 
  function($scope) {
    $scope.article = [
    	{
	    	'titre': 'Article 2',
	   		'date': '04/06/2014',
	     	'description': 'Deuxième article posté sur le blog le 04/06/2014 !'
	 	}
    ];
  }
]);
