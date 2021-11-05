const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it('should return ["g","c","t","m","t"] for ["ground", "control", "to", "major", "tom"],word => word[0]', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"],word => word[0]), ["g","c","t","m","t"]);
  });

  it('should return [true,true,false,true,false] for ["ground", "control", "to", "major", "tom"],word => word.length > 3', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"],word => word.length > 3), [true,true,false,true,false]);
  });

  it('should return [-1,2,-3,4,-5] for [1, 2, 3, 4, 5],x => (x % 2 === 0) ? x : -x)', () => {
    assert.deepEqual(map([1, 2, 3, 4, 5],x => (x % 2 === 0) ? x : -x), [-1,2,-3,4,-5]);
  });

});
