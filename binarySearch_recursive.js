var doSearch = function(array, target, min, max) {
  min = (typeof min !== 'undefined') ?  min : 0;
  max = (typeof max !== 'undefined') ?  max : array.length - 1;

  var guess = Math.floor((max + min) / 2);
  
  if (array[guess] === target) {
    return guess;
  }

  if (min > max) {
    return -1;
  }

  return array[guess] > target ? 
    doSearch(array, target, min, guess - 1) : 
    doSearch(array, target, guess + 1, max);
  
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.assert(doSearch(primes, 73)); // 20
console.assert(doSearch(primes, 7)); // 3
console.assert(doSearch(primes, 83)); // 22
console.assert(doSearch(primes, 6)); // -1
console.assert(doSearch(primes, 84)); // -1
