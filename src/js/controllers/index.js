'use strict';

var TRANSACTION_DISPLAYED = 10;
var BLOCKS_DISPLAYED = 5;

angular.module('blockwatch.system').controller('IndexController',
  function($scope, Global, getSocket, Blocks) {

    $scope.global = Global;


    var _getBlocks = function() {
      Blocks.get({
        limit: BLOCKS_DISPLAYED
      }, function(res) {
        $scope.blocks = res.blocks;
        $scope.blocksLength = res.length;
      });
    };

    var _initHeatmap = function () {
      $scope.blockHeatMap = new CalHeatMap();
      $scope.blockHeatMap.init({
        itemSelector: '#blockheatmap',
        domain: "year",
        domainGutter: 5,
        domainMargin: [20, 0, 0, 0],
        subDomain: "month",
        colLimit: 4,
        start: new Date(2009, 10, 1),
        cellSize: 20,
        cellPadding:5,
        range: 5,
        legend: [2, 4, 6, 8],
        legendMargin: [0, 0, 0, 0],
        legendVerticalPosition: top
      });
      console.log($scope);
    }

    /*
     * DISABLE web sockets for now...
     *
     *
    var socket = getSocket($scope);

    var _startSocket = function() { 
      socket.emit('subscribe', 'inv');
      socket.on('tx', function(tx) {
        $scope.txs.unshift(tx);
        if (parseInt($scope.txs.length, 10) >= parseInt(TRANSACTION_DISPLAYED, 10)) {
          $scope.txs = $scope.txs.splice(0, TRANSACTION_DISPLAYED);
        }
      });

      socket.on('block', function() {
        _getBlocks();
      });
    };

    socket.on('connect', function() {
      _startSocket();
    });
    */

    $scope.humanSince = function(time) {
      var m = moment.unix(time);
      return m.max().fromNow();
    };

    $scope.index = function() {
      _initHeatmap();
      _getBlocks();
      //_startSocket();
    };

    $scope.txs = [];
    $scope.blocks = [];
  });
