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

const middle = function(a) {
  if (a && a.length > 2) {
    if (a.length%2) {
      //Odd array length: return center element
      return [a[Math.floor(a.length / 2)]];
    } else {
      //Even array length: return both center elements
      return [a[a.length / 2 - 1],a[a.length / 2]];
    }
  }
  //Array too short or no array
  return [];
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);