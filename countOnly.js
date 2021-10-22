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

// Counts the specified items (itemsToCount) in a given array (allItems)
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let item of allItems) {
    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item]) {
      if (output.hasOwnProperty(item)) {
        output[item]++;
      } else {
        output[item] = 1;
      }
      // Why does the following alternative to the above if-statement not work?
      // output.hasOwnProperty(item) ? output[item] = 1 : output[item]++;
    }
  }
  return output;
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);