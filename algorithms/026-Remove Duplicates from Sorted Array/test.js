'use strict';

const assert = require('assert');
const { removeDuplicates } = require('./');

describe('#removeDuplicates', () => {

	it('nums = [1,1,2]', () => {
		const nums = [1,1,2];
		assert.equal(removeDuplicates(nums), 2);
	});

	it('nums = [1,1,1]', () => {
		const nums = [1,1,1];
		assert.equal(removeDuplicates(nums), 1);
	});


	it('nums = [1,2,3,4]', () => {
		const nums = [1,2,3,4];
		assert.equal(removeDuplicates(nums), 4);
	});

	it('nums = [1,2,2,3,4,4,4,5]', () => {
		const nums = [1,2,2,3,4,4,4,5];
		assert.equal(removeDuplicates(nums), 5);
	});
});