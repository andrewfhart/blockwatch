'use strict';

angular.module('blockwatch.currency').controller('CurrencyController',
  function($scope, $rootScope) {
    $rootScope.currency.symbol = defaultCurrency;

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      localStorage.setItem('blockwatch-currency', currency);
    };

  });
