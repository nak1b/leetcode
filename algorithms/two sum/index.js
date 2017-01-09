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
	let len = nums.length;
	let hashMap = [];
	var index = 0;
	while (index < len) {
		var lookup = target - nums[index];
		let num = nums[index];

		if (hashMap[lookup] !== undefined) {
			return [num, lookup];
		}
	
		hashMap[num] = num;

		index ++;
	}
	return []
}
