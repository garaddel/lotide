const assertEqual = require('./assertEqual');

const head = function(element) {
  return element[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");