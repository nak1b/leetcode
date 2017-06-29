'use strict';

const _ = require('lodash');
const { maxProfit } = require('./');
const assert = require('assert');

describe('#maxProfit', () => {
	const tests = [
		{
			arr: [7, 1, 5, 3, 6, 4],
			result: 5
		},
		{
			arr: [7, 6, 4, 3, 1],
			result: 0
		},
		{
			arr: [7, 6, 4, 10, 1],
			result: 6
		},
	];

	_.forEach(tests, ({arr, result}) => {
		it(`${arr} -> ${result}`, () => {
			assert.equal(maxProfit(arr), result);
		});
	});
});