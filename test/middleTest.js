const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

describe("#middle", () => {
  it("returns middle number for odd array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });
});
