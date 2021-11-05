const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("should return [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]),[2, 3]);
  });

  it('should return ["red", "green", "blue"] for ["red", "yellow", "green", "blue", "magenta", "ultraviolet"], ["yellow", "magenta", "ultraviolet"]', () => {
    assert.deepEqual(without(["red", "yellow", "green", "blue", "magenta", "ultraviolet"], ["yellow", "magenta", "ultraviolet"]), ["red", "green", "blue"]);
  });

  it("should return [] for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(without([1, 2, 3], [3, 2, 1]),[]);
  });

});