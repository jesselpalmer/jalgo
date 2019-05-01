/**
 * Binary Search
 * -------------
 * Worst-case performance:        O(log n)
 * Best-case performance:         O(1)
 * Average performance:           O(log n)
 * Worst-case space complexity:   O(1)
 * 
 * @param {array<values>} valuesArray - a sorted array of values
 * @param {any} value - the value that you are looking for
 * 
 * @returns {any} - the index if the value is found or -1 if the value is not found
 */
export const binarySearch = (valuesArray, value) => {
  const valuesLength = valuesArray.length
  let low = 0
  let high = valuesLength - 1
  let guess = null
  let mid = 0
  
  while (low <= high) {
    mid = Math.round((low + high) / 2)
    guess = valuesArray[mid]
    
    if (guess === value) {
      return mid
    }
    
    if (guess > value) {
      high = mid - 1
    }
    
    if (guess < value) {
      low = mid + 1
    }
  }
  
  return -1
}