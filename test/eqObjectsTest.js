const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("should return true for { a: '1', b: '1' }, { b: '1', a: '1'}", () => {
    assert.deepEqual(eqObjects({ a: '1', b: '1' }, { b: '1', a: '1'}), true);
  });

  it("should return false for { a: 1, b: '1' }, { b: '1', a: '1'}", () => {
    assert.deepEqual(eqObjects({ a: 1, b: '1' }, { b: '1', a: '1'}), false);
  });

  it('should return true for { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it('should return false for { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }', () => {
    assert.deepEqual(eqObjects(
      { c: "1", d: ["2", 3] },
      { c: "1", d: ["2", 3, 4] }
    ), false);
  });

  it('should return true for { c: "1", d: ["2", 3], e:{ one: 1, two: 2}}, { e:{ one: 1, two: 2} , d: ["2", 3], c: "1"}', () => {
    assert.deepEqual(eqObjects(
      { c: "1", d: ["2", 3], e:{ one: 1, two: 2}},
      { e:{ one: 1, two: 2} , d: ["2", 3], c: "1"}
    ), true);
  });

});
