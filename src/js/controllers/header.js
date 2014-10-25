'use strict';

angular.module('blockwatch.system').controller('HeaderController',
  function($scope, $rootScope, $modal, getSocket, Global, Block) {
    $scope.global = Global;

    $rootScope.currency = {
      factor: 1,
      bitstamp: 0,
      symbol: 'BTC'
    };

    $scope.menu = [{
      'title': 'Blocks',
      'link': 'blocks'
    }, {
      'title': 'Status',
      'link': 'status'
    }];

    $rootScope.isCollapsed = true;
  });
