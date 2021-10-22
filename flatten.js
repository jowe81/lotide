const assertArraysEqual = function(a, b) {
  //Console colors
  let reset = "\x1b[0m";
  let bgRed = "\x1b[41m";
  let green = "\x1b[32m";
  let passPrefix = `${green} **PASS** ${reset}`;
  let failPrefix = `${bgRed} **FAIL** ${reset}`;

  if (eqArrays(a,b)) {
    console.log(`${passPrefix} Assertion Passed: arrays are equal!`);
  } else {
    console.log(`${failPrefix} Assertion Failed: arrays are different!`);
  }
};

const eqArrays = function(a,b) {
  if (!(a && b && a.length === b.length))
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};

const flatten = function(a) {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      //Recursive (couldn't resist...)
      let nestedArray = flatten(a[i]);
      for (let j = 0; j < nestedArray.length; j++) {
        output.push(nestedArray[j]);
      }
      //Iterative Alternative (single layer)
      /*
      let nestedArray = a[i];
      for (let j = 0; j < nestedArray.length; j++) {
        output.push(nestedArray[i,j]);
      }
      */
    } else {
      output.push(a[i]);
    }
  }
  return output;
};

console.log("Single-layer tests:");
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]) ,[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]) ,[1, 2, 3, 4, 5, 6]);
console.log("Multi-layer tests:");
assertArraysEqual(flatten([1, 2, [3, [4, 40, 41]], 5, [6]]) ,[1, 2, 3, 4, 40, 41, 5, 6]);
assertArraysEqual(flatten([1, [2, [3, [4, [40, [41, [5, [6]]]]]]]]) ,[1, 2, 3, 4, 40, 41, 5, 6]);