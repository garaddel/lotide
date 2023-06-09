const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object,value){
  for (const key in object){
    //Check if the key exists directly on the object
    if(object.hasOwnProperty(key) && object[key] === value){
      return key; // return key if match is found 
    }
  } 
  return undefined; // return undefined if no key with the given value is found
  
  }
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 