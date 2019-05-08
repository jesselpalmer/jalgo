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
const euclideanAlgorithm = (num1, num2) => {
  const lowNum = Math.min(num1, num2)

  for (let i = lowNum; i > 1; i--) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i
    }
  }

  return -1
}

export default euclideanAlgorithm
