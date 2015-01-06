# dimensionality

Find the number of dimensions of an array

```sh
npm install dimensionality --save
```

## Usage

`dimensionality(array[, shallowSearch = false])`

Returns the maximum array depth of the array, meaning the maximum number of nests in the nested arrays.

```js
var dimensionality = require('dimensionality');

dimensionality(undefined) // 0
dimensionality(4) // 0
dimensionality([2, 4, 5, 2]) // 1
dimensionality([undefined, null, 2, {}, 'test']) // 1
dimensionality([undefined, null, 2, {}, 'test', []]) // 2
dimensionality([[{}, ['test']]]) // 3
dimensionality([1, [2, [3, [4]]]]) // 4

// shallowSearch example
dimensionality([[4, [5]]]) // 3
dimensionality([[4, [5]]], true) // 2
dimensionality([
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
], true) // 3
```

### ShallowSearch

By default, `shallowSearch = false`.

If `shallowSearch = true`, then dimensionality finds the dimension only searching for the first element of the nested array.

This is useful for large data structures that are known to have equal array depth.
