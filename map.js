const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays aren't equal.");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const array1 = [1, 2, 3, 4];
const mappedArray1 = map(array1, function(item) {
  return item * 2;
});
console.log(mappedArray1); // Output: [2, 4, 6, 8]


const array2 = [5, 10, 15, 20];
const mappedArray2 = map(array2, item => item + 1);
console.log(mappedArray2); // Output: [6, 11, 16, 21]


const multiplyByThree = function(num) {
  return num * 3;
};

const array3 = [2, 4, 6, 8];
const mappedArray3 = map(array3, multiplyByThree);
console.log(mappedArray3); // Output: [6, 12, 18, 24]
