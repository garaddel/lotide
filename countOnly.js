const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) { 

    const counts = {}; // We'll use this object to keep track of the counts of each string
  
    for (const item of allItems) { // For each string in the array
      if (itemsToCount[item]) { // If this string should be counted
        if (counts[item]) { // If we've already counted this string before
          counts[item] += 1; // Increase its count by 1
        } else { // If we haven't counted this string before
          counts[item] = 1; // Start counting it with a count of 1
        }
      }
    }
  
    return counts; // Return the object with the counts of each string
  } 
const names = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];
const itemsToCount = { "Alice": true, "Bob": true, "Charlie": true };
const result = countOnly(names, itemsToCount); 
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]; 


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(result1); 

