var isArray = require('isArray');

/**
 * Returns the maximum array depth of the array, meaning the maximum number of nests in the nested arrays.
 * @param  {Anything} array The array to find the dimensionality of
 * @param  {Boolean} shallowSearch If the search should *not* search all element
 * @return {Integer} The dimensionality of the array
 */
function dimensionality (array, shallowSearch) {
  var dimensions = 0;
  // For performance, store a stack of array indices (no recursion)
  var indices = [0];
  do {

  } while (isArray(array));

  return dimensions;
}

module.exports = dimensionality;