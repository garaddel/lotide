const assertEqual = require('./assertEqual');

const tail = function(arrays) {
  let newArray = [];
  for (let i = 1; i < arrays.length; i++) {
    newArray.push(arrays[i]);
  }
  return newArray;
};

module.exports = tail;
