//Return the key of the first property in obj that the callback returns negative with
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key]))
      return key;
  }
};

module.exports = findKey;
