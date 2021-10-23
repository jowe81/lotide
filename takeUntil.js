const assertArraysEqual = function(a, b) {
  //Console colors
  let reset = "\x1b[0m";
  let bgRed = "\x1b[41m";
  let green = "\x1b[32m";
  let passPrefix = `${green} **PASS** ${reset}`;
  let failPrefix = `${bgRed} **FAIL** ${reset}`;

  if (eqArrays(a,b)) {
    console.log(`${passPrefix} [${a}] === [${b}]`);
  } else {
    console.log(`${failPrefix} [${a}] !== [${b}]`);
  }
};

const eqArrays = function(a,b) {
  if (!(a && b && a.length === b.length))
    return false;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      //Nested array
      return eqArrays(a[i], b[i]);
    } else {
      if (a[i] !== b[i])
        return false;
    }
  }
  return true;
};

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil([1, true, [3, 4], "a"], x => Array.isArray(x)), [1, true]);