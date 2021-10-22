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

const letterPositions = function(str) {
  const output = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      output[str[i]] ? output[str[i]].push(i) : output[str[i]] = [i];
    }
  }
  return output;
};

//Test
const result = letterPositions("hello");
assertArraysEqual(result["h"],[0]);
assertArraysEqual(result["e"],[1]);
assertArraysEqual(result["l"],[2,3]);
assertArraysEqual(result["o"],[4]);

