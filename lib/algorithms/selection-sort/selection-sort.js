"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getLowestElementIndex(list) {
  var min = list[0];
  var lowestElementIndex = 0;

  list.forEach(function (element, index) {
    if (element < min) {
      min = element;
      lowestElementIndex = index;
    }
  });

  return lowestElementIndex;
}

var selectionSort = exports.selectionSort = function selectionSort(list) {
  var result = new Array();

  while (list.length !== 0) {
    var lowestElementIndex = getLowestElementIndex(list);
    result.push(list[lowestElementIndex]);
    list.splice(lowestElementIndex, 1);
  }

  return result;
};