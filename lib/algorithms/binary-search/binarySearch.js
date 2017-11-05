"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var binarySearch = exports.binarySearch = function binarySearch(numList, num) {
  var low = 0;
  var high = numList.length - 1;
  var guess = null;
  var mid = 0;

  while (low <= high) {
    mid = Math.round((low + high) / 2);
    guess = numList[mid];

    if (guess === num) {
      return mid;
    }

    if (guess > num) {
      high = mid - 1;
    }

    if (guess < num) {
      low = mid + 1;
    }
  }

  return null;
};