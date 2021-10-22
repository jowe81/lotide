const assertEqual = function(actual, expected) {
  //Console colors
  let reset = "\x1b[0m";
  let bgRed = "\x1b[41m";
  let green = "\x1b[32m";
  let passPrefix = `${green} **PASS** ${reset}`;
  let failPrefix = `${bgRed} **FAIL** ${reset}`;

  if (actual === expected) {
    console.log(`${passPrefix} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${failPrefix} Assertion Failed: [${actual}] !== [${expected}]`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays("A","A"), true);
assertEqual(eqArrays(1), false);

