const countLetters = function(str) {
  let output = {};
  for (let char of str) {
    if (char !== " ") { //skip spaces
      output.hasOwnProperty(char) ? output[char]++ : output[char] = 1;
    }
  }
  return output;
};

module.exports = countLetters;
