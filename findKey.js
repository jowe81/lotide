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

//Return the key of the first property in obj that the callback returns negative with
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key]))
      return key;
  }
};

//Tests
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "red": { primaryColors: 1 },
  "yellow":   { primaryColors: 2, red:255, green:255 },
  "white": { primaryColors: 3, red:255, green:255, blue:255 },
  "gray": { primaryColors: 3, red:128, green:128, blue:128 },
  "black": { primaryColors: 0 },
}, x => x.primaryColors > 2), "white");

assertEqual(findKey({
  "red": { primaryColors: 1, red:255 },
  "yellow":   { primaryColors: 2, red:255, green:255 },
  "white": { primaryColors: 3, red:255, green:255, blue:255 },
  "gray": { primaryColors: 3, red:128, green:128, blue:128 },
  "black": { primaryColors: 0 },
}, x => x.green), "yellow");
