const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;

  //Console colors
  let reset = "\x1b[0m";
  let bgRed = "\x1b[41m";
  let green = "\x1b[32m";
  let passPrefix = `${green} **PASS** ${reset}`;
  let failPrefix = `${bgRed} **FAIL** ${reset}`;

  if (eqObjects(a,b)) {
    //console.log(`${passPrefix} Assertion Passed: objects are equal!`);
    console.log(`${passPrefix} ${inspect(a)} === ${inspect(b)}`);
  } else {
    //console.log(`${failPrefix} Assertion Failed: objects are different!`);
    console.log(`${failPrefix} ${inspect(a)} !== ${inspect(b)}`);
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

const eqObjects = function(o1, o2) {
  let result = true;
  if (Object.keys(o1).length === Object.keys(o2).length) {
    //Same # of keys
    for (let key in o1) {
      if (Array.isArray(o1[key])) {
        //Current key holds an array
        if (!eqArrays(o1[key], o2[key])) {
          result = false;
          break;
        }
      } else if (o1[key] instanceof Object) {
        //Current key holds an object
        if (!eqObjects(o1[key], o2[key])) {
          result = false;
          break;
        }
      } else {
        //Current key holds a primitive value
        if (o1[key] !== o2[key]) {
          result = false;
          break;
        }
      }
    }
  } else {
    result = false;
  }
  return result;
};


//Tests

console.log("Tests with primitive values");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // PASS

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // FAIL

console.log("Tests with arrays as values");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // PASS
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // FAIL

console.log("Tests with nested arrays as values");
const cd3 = { c: "1", d: ["2", 3, [true, false]] };
const dc3 = { d: ["2", 3, [true, false]], c: "1" };
assertObjectsEqual(cd3, dc3); // PASS
const dc4 = { d: ["2", 3, [true, 3]], c: "1" };
assertObjectsEqual(cd3, dc4); // FAIL

console.log("Tests with objects as values");
const ef = { c: "1", d: ["2", 3], e:{ one: 1, two: 2} };
const fe = { e:{ one: 1, two: 2} , d: ["2", 3], c: "1"};
assertObjectsEqual(ef, fe); // PASS