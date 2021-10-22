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

const without = function(a, b) {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i]))
      output.push(a[i]);
  }
  return output;
};

//Tests for functionality
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without(["red", "yellow", "green", "blue", "magenta", "ultraviolet"], ["yellow", "magenta", "ultraviolet"]), ["red", "green", "blue"]);
assertArraysEqual(without([1, 2, 3], [3, 2, 1]),[]);
assertArraysEqual(without([1, 2, 3],[4, 5, 6]),[1, 2, 3]);

//Test for original array integrity
let testArray = [1, 2, 3];
without(testArray, [1, 2, "3", true]);
assertArraysEqual(testArray, [1, 2, 3]);
