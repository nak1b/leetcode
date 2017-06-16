'use strict';

module.exports = { findTheDifference }

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
  const map = {};
  const sLen = s.length;
  const tLen = t.length;
  
  for(let i=0; i<sLen; i++) {
    const alphabate = s[i];
    const mappedValue = map[alphabate];
    
    if(mappedValue === undefined) {
       map[alphabate] = 1;
       continue;
    }
    map[alphabate] = mappedValue + 1;
  }
  
  for(let j=0; j<tLen; j++) {
    const alphabate = t[j];
    const mappedValue = map[alphabate];
    
    if(mappedValue === undefined) {
      return alphabate;
    }
    
    if(mappedValue === 1) {
      delete map[alphabate];
      continue;
    }
    
    map[alphabate] = mappedValue - 1;
  }
};