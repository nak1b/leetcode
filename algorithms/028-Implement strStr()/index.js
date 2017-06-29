'use strict';

module.exports = { strStr };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function strStr(haystack, needle) {
	let found = -1;
	const haystackLen = haystack.length;
	const needleLen = needle.length;
	const ittr = haystackLen - needleLen;
	
	for(let i=0; i<=ittr; i++) {
		found = i;

		for(let j=0; j<needleLen; j++) {
			const s1 = haystack[j+i];
			const s2 = needle[j];
			if(s1 !== s2) {
				found = -1;
				break;
			}
		}

		if(found !== -1) return found;
	}
	return found;
};