const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {

  it('should return true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(assertObjectsEqual(ab, ba), true);
  });

  it('should return true for { c: "1", d: ["2", 3, [true, false]] }, { d: ["2", 3, [true, false]], c: "1" }', () => {
    const cd3 = { c: "1", d: ["2", 3, [true, false]] };
    const dc3 = { d: ["2", 3, [true, false]], c: "1" };
    assert.strictEqual(assertObjectsEqual(cd3, dc3), true);
  });

  it('should return false for { c: "1", d: ["2", 3, [true, false]] }, { d: ["2", 3, [true, 3]], c: "1" }', () => {
    const cd3 = { c: "1", d: ["2", 3, [true, false]] };
    const dc4 = { d: ["2", 3, [true, 3]], c: "1" };
    assert.strictEqual(assertObjectsEqual(cd3, dc4), false);
  });

});