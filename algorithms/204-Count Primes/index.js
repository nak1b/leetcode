'use strict';

module.exports = { countPrimes }

/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const primes = [];

  if(n > 2) {
    primes.push(2);
  }

  for (let i = 3; i<n; i++) {

    let isPrime = true;
    let loopItrn = Math.sqrt(i)

    for(let index=0; index<loopItrn; index++) {
      if(primes[index] > loopItrn) break;
            
      if(i % primes[index] === 0) {
        isPrime = false;
        break;
      }
    }
        
    if(isPrime) {
      primes.push(i);
    }
  }
  return primes.length;
};

