//Test Arrays for identity (including nested)
const eqArrays = function(a,b) {
  if (!(a && b && a.length === b.length))
    return false;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      //Nested array
      return eqArrays(a[i], b[i]);
    } else {
      if (a[i] !== b[i])
        return false;
    }
  }
  return true;
};

module.exports = eqArrays;