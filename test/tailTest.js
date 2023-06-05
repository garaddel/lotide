const assertEqual = require('../assertEqual');
const tail = require('../tail');


// TEST CODE
const arrays = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(arrays));
assertEqual(arrays.length, 3);