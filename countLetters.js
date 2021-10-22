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

const countLetters = function(str) {
  let output = {};
  for (let char of str) {
    if (char !== " ") { //skip spaces
      output.hasOwnProperty(char) ? output[char]++ : output[char] = 1;
    }
  }
  return output;
};

// Test code
const testString = "Hello World";
const result1 = countLetters(testString);
assertEqual(result1["H"], 1);
assertEqual(result1["e"], 1);
assertEqual(result1["l"], 3);
assertEqual(result1["o"], 2);
assertEqual(result1["W"], 1);
assertEqual(result1["r"], 1);
assertEqual(result1["d"], 1);
assertEqual(result1["w"], undefined);
assertEqual(result1[" "], undefined);