'use strict';

module.exports = { climbStairs };

/**
 * @param {number} n
 * @return {number}
 */

const memo = {};
function climbStairs(n) {
	if(memo[n] !== undefined) return memo[n];
	
	const fib = n < 2 ? 1 : climbStairs(n-1) + climbStairs(n-2);
	memo[n] = fib; 
	
	return fib;
};