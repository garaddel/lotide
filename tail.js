const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrays) {
  let newArray = [];
  for (let i = 1; i < arrays.length; i++) {
    newArray.push(arrays[i]);
  }
  return newArray;
};

const arrays = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(arrays));
assertEqual(arrays.length, 3);