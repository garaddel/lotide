const assertEqual = require('../assertEqual'); 
const assert = require('chai').assert;
const tail = require('../tail') 

describe("#tail", () => {
  it("returns tail of an array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [2, 3, 4, 5];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });
});
//const arrays = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(arrays));
//assertEqual(arrays.length, 3); 