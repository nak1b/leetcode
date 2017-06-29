'use strict';

const assert = require('assert');
const _ = require('lodash');
const { climbStairs } = require('./');


describe('#climbStairs', () => {
	const tests = [
		{n: 0, result: 1},
		{n: 1, result: 1},
		{n: 2, result: 2},
		{n: 3, result: 3},
		{n: 4, result: 5},
		{n: 10, result: 89},
		{n: 49, result: 12586269025},
	];

	_.forEach(tests, ({n, result}) => {
		it(`${n} -> ${result}`, () => {
			assert.equal(climbStairs(n), result);
		});
	});

});