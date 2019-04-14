export const euclideanAlgorithm = (num1, num2) => {
  const lowNum = Math.min(num1, num2)

  for (let i = lowNum; i >= 1; i--) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i
    }
  }

  return -1
}
