const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


const numbers = [1, 2, 3, 4, 5, 6];
const numbers1 = [1, 2, 4, 5 , 6, 9];
const middleNumbers = middle(numbers);
assertArraysEqual(middleNumbers,[3,4])
// Output: [3, 4]