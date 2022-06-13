"use strict";

var _binarySearch = _interopRequireDefault(require("./binary-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Binary Search tests', function () {
  test('should find an element if it exists and is a number', function () {
    var testArray = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    expect((0, _binarySearch.default)(testArray, 3)).toBe(4);
  });
  test('should return index if an element exists and is a string', function () {
    var testArray = ['apple', 'facebook', 'google', 'netflix'];
    expect((0, _binarySearch.default)(testArray, 'google')).toBe(2);
  });
  test('should return index if the element exists', function () {
    var testArray = [-42324, 213123, 'amazon', 'uber'];
    expect((0, _binarySearch.default)(testArray, 'amazon')).toBe(2);
  });
  test('should return -1 if an array is empty', function () {
    var testArray = [];
    expect((0, _binarySearch.default)(testArray, 25)).toBe(-1);
  });
});