const assertEqual = require('./assertEqual');

//Return array without its first element
const tail = function(arg) {
  let result = [];
  if (arg && arg.length > 1) {
    for (let i = 1; i < arg.length; i++) {
      result.push(arg[i]);
    }
  }
  return result;
};

module.exports = tail;