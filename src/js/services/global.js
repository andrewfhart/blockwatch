'use strict';

//Global service for global variables
angular.module('blockwatch.system')
  .factory('Global',[
    function() {
      return {};
    }
  ])
  .factory('Version',
    function($resource) {
      return $resource('/api/version');
  });