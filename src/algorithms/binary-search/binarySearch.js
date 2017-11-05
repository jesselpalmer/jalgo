export const binarySearch = (numList, num) => {
  let low = 0
  let high = numList.length - 1
  let guess = null
  let mid = 0
  
  while (low <= high) {
    mid = Math.round((low + high) / 2)
    guess = numList[mid]
    
    if (guess === num) {
      return mid
    }
    
    if (guess > num) {
      high = mid - 1
    }
    
    if (guess < num) {
      low = mid + 1
    }
  }
  
  return null
}