const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  let result = {}; 
  for(const char of string){
    if(result[char]){ // count string 
      result[char] += 1; // if char already exists increase its count by 1 
    }else { // if we havent counted this before 
      result[char] = 1 // start count by 1 
    }
  }
  
  return result
}  
console.log(countLetters('chips'));