const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true for [], []", () => {
    assert.equal(eqArrays([], []), true);
  });

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [1, 3, 2]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 3, 2]), false);
  });

  it("returns true for [1, [2 ,[3, 4]]], [1, [2 ,[3, 4]]]", () => {
    assert.equal(eqArrays([1, [2 ,[3, 4]]], [1, [2 ,[3, 4]]]), true);
  });

  it("returns false for [[1, [2 , 3 , [3, 4]]], [1, [2 ,[3, 4]]]", () => {
    assert.equal(eqArrays([1, [2 , 3 , [3, 4]]], [1, [2 ,[3, 4]]]), false);
  });

});