const eqArrays = require('./eqArrays');

const eqObjects = function(o1, o2) {
  let result = true;
  if (Object.keys(o1).length === Object.keys(o2).length) {
    //Same # of keys
    for (let key in o1) {
      if (Array.isArray(o1[key])) {
        //Current key holds an array
        if (!eqArrays(o1[key], o2[key])) {
          result = false;
          break;
        }
      } else if (o1[key] instanceof Object) {
        //Current key holds an object
        if (!eqObjects(o1[key], o2[key])) {
          result = false;
          break;
        }
      } else {
        //Current key holds a primitive value
        if (o1[key] !== o2[key]) {
          result = false;
          break;
        }
      }
    }
  } else {
    result = false;
  }
  return result;
};

module.exports = eqObjects;