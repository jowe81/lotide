const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it('should return "exodus" for { genesis: 300, exodus: 350, leviticus: 500, numbers: 350, deuteronomy: 498 }, 350', () => {
    assert.strictEqual(findKeyByValue({ genesis: 300, exodus: 350, leviticus: 500, numbers: 350, deuteronomy: 498 }, 350), "exodus");
  });

  it('should return "deuteronomy" for { genesis: 300, exodus: 350, leviticus: 500, numbers: 350, deuteronomy: 498 }, 498', () => {
    assert.strictEqual(findKeyByValue({ genesis: 300, exodus: 350, leviticus: 500, numbers: 350, deuteronomy: 498 }, 498), "deuteronomy");
  });

  it('should return undefined for { genesis: 300, exodus: 350, leviticus: 500, numbers: 350, deuteronomy: 498 }, 123', () => {
    assert.strictEqual(findKeyByValue({ genesis: 300, exodus: 350, leviticus: 500, numbers: 350, deuteronomy: 498 }, 123), undefined);
  });

});