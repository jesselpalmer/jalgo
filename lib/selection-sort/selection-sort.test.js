"use strict";

var _selectionSort = _interopRequireDefault(require("./selection-sort"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Selection Sort tests', function () {
  test('should sort a list of numbers', function () {
    var list = [2, 9, 12, 0, 3, -121, -2, 4];
    var expected = [-121, -2, 0, 2, 3, 4, 9, 12];
    var actual = (0, _selectionSort.default)(list);
    expect(actual).toStrictEqual(expected);
  });
  test('should sort a list of strings', function () {
    var list = ['stanford', 'berkeley', 'mit', 'cmu'];
    var expected = ['berkeley', 'cmu', 'mit', 'stanford'];
    var actual = (0, _selectionSort.default)(list);
    expect(actual).toStrictEqual(expected);
  });
});