'use strict';

module.exports = { romanToInt }

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {

	if(!s || typeof s !== 'string') return false;

	const map = {
		'I': 1,
		'V': 5,
		'X': 10,	  
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,	
	};

	let result = 0;
  let l = s.length - 1;
  let prev = 0;

	for(let i=l; i>0; i--) {
 		const currentLetter = s[i].toUpperCase();
 		const current = map[currentLetter];

 		if(current < prev) {
 			result -= current;
 		} else {
 			result += current;
 		}
 		
 		prev = current;
	}

	const letter = s[0].toUpperCase();
 	const current = map[letter];
	
	if(current < prev) {
 		result -= current;
 	}else {
 		result += current;
 	}

  return result;
};