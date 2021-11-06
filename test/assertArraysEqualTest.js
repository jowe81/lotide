const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {

  it("should return true for [1, 2, 3], [1, 2, 3] ", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for [], [1]", () => {
    assert.deepEqual(assertArraysEqual([], [1]), false);
  });

  it("should return true for [1, [2 ,[3, 4]]], [1, [2 ,[3, 4]]]", () => {
    assert.deepEqual(assertArraysEqual([1, [2 ,[3, 4]]], [1, [2 ,[3, 4]]]), true);
  });

  it("should return false for [1, [2 , 3 , [3, 4]]], [1, [2 ,[3, 4]]]", () => {
    assert.deepEqual(assertArraysEqual([1, [2 , 3 , [3, 4]]], [1, [2 ,[3, 4]]]), false);
  });

});