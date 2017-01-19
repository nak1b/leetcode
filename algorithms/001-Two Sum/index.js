'use strict';

module.exports = {twoSum, twoSum2};

/**
	* @param {number[]} nums
	* @param {number} target
	* @return {number[]}
	*	
	*	[2, 7, 11, 15], target = 9 => [2, 7]
	*/


function twoSum2(nums, target) {
	let len = nums.length;
	let result = [];
	var i = 0;
	while(i<len) {
		var j = len - i;
		var numOne = nums[i];
		while(j) {
			var numTwo = nums[j];
			if((numOne + numTwo) === target) {
				return [numOne, numTwo]
			}
			j--;
		}
		i++;
	}
}

function twoSum(nums, target) {
	const len = nums.length;
	const hashMap = {};
	let index = 0;

	while (index < len) {
		const num = nums[index];
		const lookup = target - num;

		if (hashMap[lookup] !== undefined) {
			return [index, hashMap[lookup]].sort();
		}
	
		hashMap[num] = index;
		index ++;
	}
	return []
}
