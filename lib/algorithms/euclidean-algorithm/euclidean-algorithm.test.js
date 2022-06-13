"use strict";

var _euclideanAlgorithm = _interopRequireDefault(require("./euclidean-algorithm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Euclidean Algorithm tests', function () {
  test('should return the correct greatest common denominator', function () {
    expect((0, _euclideanAlgorithm.default)(125, 625)).toBe(125);
  });
  test('should return -1 if their are no common denominators', function () {
    expect((0, _euclideanAlgorithm.default)(5, 123)).toBe(-1);
  });
  test('should return -1 if only one parameter is passed in', function () {
    expect((0, _euclideanAlgorithm.default)(123)).toBe(-1);
  });
  test('should return -1 if no parameters are passed in', function () {
    expect((0, _euclideanAlgorithm.default)()).toBe(-1);
  });
});