'use strict';

// Declare app level module which depends on filters, and services
angular.module('mgb-inventory', ['mgb-inventory.controllers', 'mgb-inventory.filters', 'mgb-inventory.services', 'mgb-inventory.directives'])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'partials/partial1.html',
				controller: 'MyCtrl1'
			});
		}
	]);