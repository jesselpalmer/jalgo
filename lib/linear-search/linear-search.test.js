"use strict";

var _linearSearch = _interopRequireDefault(require("./linear-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Linear Search tests', function () {
  test('should return the correct index of the element', function () {
    var list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    var element = 3;
    expect((0, _linearSearch.default)(list, element)).toBe(4);
  });
  test('should return -1 if the element is not in the list', function () {
    var list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    var element = 17;
    expect((0, _linearSearch.default)(list, element)).toBe(-1);
  });
});