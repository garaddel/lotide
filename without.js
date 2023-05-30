const words = ["hello", "world", "lighthouse"];

// This checks if two arrays are equal
const eqArrays = function(array1, array2) {
  // Check if arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }

  // Iterate over each element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // If all elements match, arrays are equal
  return true;
};

// This function is to determine if two arrays are equal
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays aren't equal.");
  }
};

// This function is to remove items from source array
const without = function(source, itemsToRemove) {
  const result = [];

  // Iterate over each item in the source array
  for (const item of source) {
    // Checking if item is not in the itemsToRemove array
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

// Test cases: 
console.log(without(words, ["lighthouse"]));
console.log(words);