const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;

  //Console colors
  let reset = "\x1b[0m";
  let bgRed = "\x1b[41m";
  let green = "\x1b[32m";
  let passPrefix = `${green} **PASS** ${reset}`;
  let failPrefix = `${bgRed} **FAIL** ${reset}`;

  if (eqObjects(a,b)) {
    console.log(`${passPrefix} ${inspect(a)} === ${inspect(b)}`);
    return true;
  } else {
    console.log(`${failPrefix} ${inspect(a)} !== ${inspect(b)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;