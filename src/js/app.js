'use strict';

var defaultCurrency = localStorage.getItem('blockwatch-currency') || 'BTC';

angular.module('blockwatch',[
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngProgress',
  'ui.bootstrap',
  'ui.route',
  'angularMoment',
  'blockwatch.system',
  'blockwatch.blocks',
  'blockwatch.search',
  'blockwatch.socket',
  'blockwatch.currency'
]);

angular.module('blockwatch.blocks', []);
angular.module('blockwatch.currency', []);
angular.module('blockwatch.search', []);
angular.module('blockwatch.socket', []);
angular.module('blockwatch.system', []);