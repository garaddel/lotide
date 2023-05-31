const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    } 
    

    for (let key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }

      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  return obj1 === obj2;
};

const assertObjectsEqual = function(actual, expected) {
 

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
assertObjectsEqual(obj1, obj2); // should pass

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 3 };
assertObjectsEqual(obj3, obj4); // should fail