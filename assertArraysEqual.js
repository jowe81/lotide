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

assertArraysEqual([1, 2, 3], [1, 2, 3]); //PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //FAIL
assertArraysEqual([1, 2, 3], [1]); //FAIL
assertArraysEqual([], [1]); //FAIL
assertArraysEqual([], []); //PASS
assertArraysEqual("A","A"); //PASS
assertArraysEqual(1); //FAIL

