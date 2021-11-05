const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  it('should return "white" for { "red": { primaryColors: 1 }, "yellow":   { primaryColors: 2, red:255, green:255 }, "white": { primaryColors: 3, red:255, green:255, blue:255 }, "gray": { primaryColors: 3, red:128, green:128, blue:128 }, "black": { primaryColors: 0 }}, x => x.primaryColors > 2', () => {
    assert.strictEqual(findKey({ "red": { primaryColors: 1 }, "yellow":   { primaryColors: 2, red:255, green:255 }, "white": { primaryColors: 3, red:255, green:255, blue:255 }, "gray": { primaryColors: 3, red:128, green:128, blue:128 }, "black": { primaryColors: 0 }}, x => x.primaryColors > 2), "white");
  });

});

// Tests not refactored:
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");
// assertEqual(findKey({
//   "red": { primaryColors: 1, red:255 },
//   "yellow":   { primaryColors: 2, red:255, green:255 },
//   "white": { primaryColors: 3, red:255, green:255, blue:255 },
//   "gray": { primaryColors: 3, red:128, green:128, blue:128 },
//   "black": { primaryColors: 0 },
// }, x => x.green), "yellow");
