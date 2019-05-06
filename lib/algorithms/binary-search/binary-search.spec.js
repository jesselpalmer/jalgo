'use strict';

var _chai = require('chai');

var _binarySearch = require('./binary-search');

var _binarySearch2 = _interopRequireDefault(_binarySearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('Binary Search tests', function () {
  it('should find an element if it exists and is a number', function () {
    var testArray = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    (0, _chai.expect)((0, _binarySearch2.default)(testArray, 3)).to.be.equal(4);
  });

  it('should return index if an element exists and is a string', function () {
    var testArray = ['apple', 'facebook', 'google', 'netflix'];
    (0, _chai.expect)((0, _binarySearch2.default)(testArray, 'google')).to.be.equal(2);
  });

  it('should return index if the array contains numbers and strings and the element exists', function () {
    var testArray = [-42324, 213123, 'amazon', 'uber'];
    (0, _chai.expect)((0, _binarySearch2.default)(testArray, 'amazon')).to.be.equal(2);
  });

  it('should return -1 if an array is empty', function () {
    var testArray = [];
    (0, _chai.expect)((0, _binarySearch2.default)(testArray, 25)).to.be.equal(-1);
  });
});