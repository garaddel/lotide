const eqArrays = function(array1,array2){
  if(array1.length !== array2.length) {
    return false
  } 
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return false;
    }
  } 

  return true;
} 

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays aren't equal.");
  }
};


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here 
  for(let i = 0; i < sentence.length; i++){ // iterate through sentence 
    if(results[sentence[i]]){// if character is already in result
    results[sentence[i]].push(i)
    
    }else { 
      results[sentence[i]] = [i]; //if results doesnt have the letter in key give position of letter in value 
      
    }
  }
  return results;
}

console.log(letterPositions("lighthouse in the house")); 
assertArraysEqual(letterPositions("hello").e, [1]);  