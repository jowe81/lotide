const middle = function(a) {
  if (a && a.length > 2) {
    if (a.length % 2) {
      //Odd array length: return center element
      return [a[Math.floor(a.length / 2)]];
    } else {
      //Even array length: return both center elements
      return [a[a.length / 2 - 1],a[a.length / 2]];
    }
  }
  //Array too short or no array
  return [];
};

module.exports = middle;