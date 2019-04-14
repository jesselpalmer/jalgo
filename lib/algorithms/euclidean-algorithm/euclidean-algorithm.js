"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var euclideanAlgorithm = exports.euclideanAlgorithm = function euclideanAlgorithm(num1, num2) {
  var lowNum = Math.min(num1, num2);

  for (var i = lowNum; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }

  return -1;
};