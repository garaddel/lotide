const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
const movies = {
  "Pursuit of happiness": { genre: "Drama", rating: 9.3 },
  "The Town": { genre: "Crime", rating: 9.2 },
  "Spider-Man": { genre: "Action", rating: 9.0 },
  "Pulp Fiction": { genre: "Crime", rating: 8.9 },
  "Fight Club": { genre: "Drama", rating: 8.8 }
};

const result1 = findKey(movies, movie => movie.genre === "Action");
assertEqual(result1, "Spider-Man");
