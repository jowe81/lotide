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

const tail = function(arg) {
  let result = [];
  if (arg && arg.length > 1) {
    for (let i = 1; i < arg.length; i++) {
      result.push(arg[i]);
    }
  }
  return result;
};

console.log(assertEqual("Lighthouse,Labs", tail(["Hello", "Lighthouse", "Labs"]).join()));
console.log(assertEqual("3,4", tail([2, 3, 4]).join()));
console.log(assertEqual("3,March", tail([true, 3, "March"]).join()));
console.log(assertEqual("", tail(["single"]).join()));
console.log(assertEqual("", tail([]).join()));

//Test case for original array (this doesn't really show it's unmodified though - just that its length stayed the same)
const words = ["one", "two", "three"];
tail(words);
assertEqual(words.length, 3); //Only shows that the length of the array didn't change