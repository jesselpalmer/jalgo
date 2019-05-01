/**
 * Euclidean Algorithm
 * -------------------
 * Algorithm to find the lowest common denominator (lcd) between two numbers.
 * 
 * @param {number} num1 - first number to be used
 * @param {number} num2 - second number to be used
 */
export const euclideanAlgorithm = (num1, num2) => {
  const lowNum = Math.min(num1, num2)

  for (let i = lowNum; i >= 1; i--) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i
    }
  }

  return -1
}
