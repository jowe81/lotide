const letterPositions = function(str) {
  const output = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      output[str[i]] ? output[str[i]].push(i) : output[str[i]] = [i];
    }
  }
  return output;
};

module.exports = letterPositions;