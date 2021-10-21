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

const head = function(arg) {
  if (arg.length > 0) {
    return arg[0];
  }
  return undefined;
};

assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["five"]), "five");
assertEqual(head([]),undefined);