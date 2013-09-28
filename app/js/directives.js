'use strict';

/* Directives */


angular.module('mgb-inventory.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
