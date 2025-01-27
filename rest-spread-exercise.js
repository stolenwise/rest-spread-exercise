// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

/* Write an ES2015 Version */
const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

//  Make a function that filter out the minimum numbers
//  findMin(1,4,12,-3) // -3
//   findMin(1,-1) // -1
//   findMin(3,1) // 1

const findMin = (...args) => Math.min(...args);

// Make a function that accepts two objects and returns a new object which contains
//  all the keys and values of the first object and second object
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Make a function which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all
// of additional arguments doubled.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const newObj = { ...obj, [key]: val };
  return newObj;
};
