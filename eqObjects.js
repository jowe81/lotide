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
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

console.log("Tests with arrays as values");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

console.log("Tests with nested arrays as values");
const cd3 = { c: "1", d: ["2", 3, [true, false]] };
const dc3 = { d: ["2", 3, [true, false]], c: "1" };
assertEqual(eqObjects(cd3, dc3), true); // => true
const dc4 = { d: ["2", 3, [true, 3]], c: "1" };
assertEqual(eqObjects(cd3, dc4), false); // => false

console.log("Tests with objects as values");
const ef = { c: "1", d: ["2", 3], e:{ one: 1, two: 2} };
const fe = { e:{ one: 1, two: 2} , d: ["2", 3], c: "1"};
assertEqual(eqObjects(ef, fe), true); // => true
