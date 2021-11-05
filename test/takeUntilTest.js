const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil",() => {

  it("should return [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[1, 2, 5, 7, 2]);
  });

  it(`should return ["I've", "been", "to", "Hollywood"] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','`, () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),["I've", "been", "to", "Hollywood"]);
  });

  it('should return [1, true] for [1, true, [3, 4], "a"], x => Array.isArray(x)', () => {
    assert.deepEqual(takeUntil([1, true, [3, 4], "a"], x => Array.isArray(x)), [1, true]);
  });

});