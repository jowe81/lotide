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

const findKeyByValue = function(obj,val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

//Tests
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const pageCounts = {
  genesis: 300,
  exodus: 350,
  leviticus: 500,
  numbers: 350,
  deuteronomy: 498
};

assertEqual(findKeyByValue(pageCounts, 350), "exodus");
assertEqual(findKeyByValue(pageCounts, 498), "deuteronomy");
assertEqual(findKeyByValue(pageCounts, 123), undefined);