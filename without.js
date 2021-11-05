const without = function(a, b) {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i]))
      output.push(a[i]);
  }
  return output;
};

module.exports = without;