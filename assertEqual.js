const assertEqual = function(actual, expected) {
  let passPrefix = "✅✅✅ ";
  let failPrefix = "❌❌❌ ";

  if (actual === expected) {
    console.log(passPrefix + "Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log(failPrefix + "Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(1, -1);