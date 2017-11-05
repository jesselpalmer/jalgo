"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * binarySearch
 * ------------
 * Worst-case performance:	     O(log n)
 * Best-case performance: 	     O(1)
 * Average performance:   	     O(log n)
 * Worst-case space complexity:  O(1)
 * 
 * @param {*} numList - a sorted list of number
 * @param {*} num - the number that you are looking for
 */
var binarySearch = exports.binarySearch = function binarySearch(numList, num) {
  var numLength = numList.length;
  var low = 0;
  var high = numLength - 1;
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