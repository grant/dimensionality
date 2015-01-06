var isArray = require('isArray');

/**
 * Returns the maximum array depth of the array, meaning the maximum number of nests in the nested arrays.
 * @param  {Anything} array The array to find the dimensionality of
 * @param  {Boolean} shallowSearch If the search should *not* search all element
 * @return {Integer} The dimensionality of the array
 */
function dimensionality (array, shallowSearch) {
  var dimensions = 0;
  if (isArray(array)) {
    if (shallowSearch) {
      dimensions = 1 + dimensionality(array[0], shallowSearch);
    } else {
      dimensions = 1 + array.reduce(function (a, b) {
        Math.max(a, b);
      });
    }
  }

  return dimensions;
}

module.exports = dimensionality;