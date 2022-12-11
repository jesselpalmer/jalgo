"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Euclidean Algorithm
 * -------------------
 * Algorithm to find the lowest common denominator (lcd) between two numbers.
 *
 * Worst-case performance:        O(n)
 * Best-case performance:         O(1)
 * Average performance:           O(n)
 * Worst-case space complexity:   O(1)
 *
 * @param {number} num1 - first number to be used
 * @param {number} num2 - second number to be used
 */
var euclideanAlgorithm = function euclideanAlgorithm(num1, num2) {
  var lowNum = Math.min(num1, num2);

  for (var i = lowNum; i > 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }

  return -1;
};

var _default = euclideanAlgorithm;
exports.default = _default;