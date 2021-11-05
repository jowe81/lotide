const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const argument = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

  const expected = {"Jason": 1, "Fang": 2};

  it(`should return {"Jason": 1, "Fang": 2} for countOnly(${firstNames}, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })`, () => {
    assert.deepEqual(countOnly(firstNames, argument), expected);
  });

});