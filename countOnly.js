// Counts the specified items (itemsToCount) in a given array (allItems)
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let item of allItems) {
    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item]) {
      output.hasOwnProperty(item) ? output[item]++ : output[item] = 1;
    }
  }
  return output;
};

module.exports = countOnly;
