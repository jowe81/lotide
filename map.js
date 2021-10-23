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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Tests
assertArraysEqual(map(["ground", "control", "to", "major", "tom"],word => word[0]),["g","c","t","m","t"]);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"],word => word.length),[6,7,2,5,3]);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"],word => word.length > 3),[true,true,false,true,false]);
assertArraysEqual(map([1, 2, 3, 4, 5],x => (x % 2 === 0) ? x : -x),[-1,2,-3,4,-5]);