'use strict';

module.exports = { removeDuplicates }

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
	const l = nums.length;
	let count = 0;
	let prev;

	for(let i=0; i<l; i++) {
		const num = nums[i];

		if(num === prev) {
			continue;
		}

		count += 1;
		prev = num;
	}
	return count;
};