'use strict';

/* jasmine specs for controllers go here */

describe('MGB Inventory Controllers', function() {
	beforeEach(module('mgb-inventory.controllers'));
	beforeEach(module('ngGrid'));

	it('should display a grid with 3 values', inject(function() {
		//spec body
		var scope = {},
			ctrl = new MgbInventoryCtrl(scope);

		expect(scope.mydata.length).toBe(3);
	}));

});