const findKeyByValue = function(obj,val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

