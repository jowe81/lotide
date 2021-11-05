const assertEqual = require('./assertEqual');

//Return first element of array arg
const head = function(arg) {
  if (arg.length > 0) {
    return arg[0];
  }
  return undefined;
};

module.exports = head;