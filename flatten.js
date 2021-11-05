const eqArrays = require('./eqArrays');

const flatten = function(a) {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      //Recursive (couldn't resist...)
      let nestedArray = flatten(a[i]);
      for (let j = 0; j < nestedArray.length; j++) {
        output.push(nestedArray[j]);
      }
      //Iterative Alternative (single layer)
      /*
      let nestedArray = a[i];
      for (let j = 0; j < nestedArray.length; j++) {
        output.push(nestedArray[i,j]);
      }
      */
    } else {
      output.push(a[i]);
    }
  }
  return output;
};

module.exports = flatten;
