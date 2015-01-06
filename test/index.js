var should = require('should');

describe('dimensionality', function () {
  var dimensionality = require('..');

  // Primitives
  it('handles undefined', function () {
    dimensionality(undefined).should.equal(0);
  });

  it('handles objects', function () {
    dimensionality({}).should.equal(0);
  });

  it('handles strings', function () {
    dimensionality('').should.equal(0);
  });

  it('handles numbers', function () {
    dimensionality(0).should.equal(0);
  });

  it('handles functions', function () {
    dimensionality(function(){}).should.equal(0);
  });

  it('handles nulls', function () {
    dimensionality(null).should.equal(0);
  });

  // Arrays
  it('handles simple arrays', function () {
    dimensionality([2, 4, 5, 2]).should.equal(1);
    dimensionality([undefined, null, 2, {}, 'test']).should.equal(1);
    dimensionality([undefined, null, 2, {}, 'test', []]).should.equal(2);
    dimensionality([[{}, ['test']]]).should.equal(3);
    dimensionality([1, [2, [3, [4]]]]).should.equal(4);
  });

  it('handles shallowSearch', function () {
    // shallowSearch example
    dimensionality([[4, [5]]]).should.equal(3);
    dimensionality([[4, [5]]], true).should.equal(2);
    dimensionality([
      [[1, 2], [3, 4]],
      [[5, 6], [7, 8]]
    ], true).should.equal(3);
  });

});