'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	const l = prices.length;
	const firstEl = prices[0];
	
	let min = firstEl;
	let max = firstEl; 
	let diff = 0;

	for(let i=1; i<l; i++) {
		const el = prices[i];

		if(el < min) min = el;
		else if(el > max) max = el;

		const newDiff = el - min;

		if(newDiff > diff) {
			max = el;
			diff = newDiff;
		}
	}

	return diff;
};