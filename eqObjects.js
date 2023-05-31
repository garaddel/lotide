const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
 
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
function eqObjects(obj1, obj2) {
  // Check if the types of obj1 and obj2 are the same
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // If both objects are of type "object"
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    // Check if they have the same number of keys
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

    // Iterate over the keys in obj1
    for (let key in obj1) {
      // Check if the key exists in obj2
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }

      // compare the values associated with the keys
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    }

    // All keys and their values match
    return true;
  }

  // If the objects are not of type "object", compare them directly
  return obj1 === obj2;
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);