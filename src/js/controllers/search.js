'use strict';

angular.module('blockwatch.search').controller('SearchController',
  function($scope, $routeParams, $location, $timeout, Global, Block, BlockByHeight) {
  $scope.global = Global;
  $scope.loading = false;

  var _badQuery = function() {
    $scope.badQuery = true;

    $timeout(function() {
      $scope.badQuery = false;
    }, 2000);
  };

  var _resetSearch = function() {
    $scope.q = '';
    $scope.loading = false;
  };

  $scope.search = function() {
    var q = $scope.q;
    $scope.badQuery = false;
    $scope.loading = true;

    Block.get({
      blockHash: q
    }, function() {
      _resetSearch();
      $location.path('block/' + q);
    }, function() { // block by height not found
      if (isFinite(q)) { // ensure that q is a finite number. A logical height value.
        BlockByHeight.get({
          blockHeight: q
        }, function(hash) {
          _resetSearch();
          $location.path('/block/' + hash.blockHash);
        }, function() { //not found, fail :(
          $scope.loading = false;
          _badQuery();
        });
      }
      else {
        $scope.loading = false;
        _badQuery();
      }
    });
  };
});
