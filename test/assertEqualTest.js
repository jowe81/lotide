const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {

  it('should return false for "Lighthouse Labs", "Bootcamp" ', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it('should return true for false, false ', () => {
    assert.strictEqual(assertEqual(false, false), true);
  });

});
