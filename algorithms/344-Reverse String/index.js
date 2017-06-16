'use strict';

module.exports = { reverseString }

/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
	let reversedStr = "";
	let l = s.length - 1;

	for(let i=l; i>=0; i--) {
		reversedStr += s[i];
	}

	return reversedStr
};