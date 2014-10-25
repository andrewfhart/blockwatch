'use strict';

angular.module('blockwatch.system').controller('FooterController',
  function($scope, $route, Version) {

    var _getVersion = function() {
      Version.get({},
        function(res) {
          $scope.version = res.version;
        });
    };

    $scope.version = _getVersion();

  });
