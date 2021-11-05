const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {

  it("should return { 'H': 1, 'e': 1, 'l': 2, 'o': 1 } for 'Hello'", () => {
    assert.deepEqual(countLetters("Hello"), { 'H': 1, 'e': 1, 'l': 2, 'o': 1 });
  });

  it("should return { ' ': 2, 's': 1 } for ' s '", () => {
    assert.deepEqual(countLetters(" s "), { 's': 1 });
  });

});