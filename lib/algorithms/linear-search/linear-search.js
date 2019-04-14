"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * linearSearch
 * ------------
 * Simple search algorithm that iterates over a list of elements to find the index of an element passed in as 
 * a parameter. If the element is not found in the list then -1 is returned. 
 * 
 * Worst-case performacne:        O(n)  
 * Best-case performance:         O(1)  
 * Average performance:           O(n)  
 * Worst-case space complexity:   O(1)  
 * 
 * @param {number[]} list - The list of elements that will be searched.
 * @param {number} element  - The element that will be searched for inside the list.
 * 
 * @returns number - The index of the element if it is found in the list. -1 is returned if element isn't found.
 */
var linearSearch = exports.linearSearch = function linearSearch(list, element) {
  for (var i = 0; i < list.length; i++) {
    var currentElement = list[i];

    if (currentElement === element) {
      return i;
    }
  }

  return -1;
};