import euclideanAlgorithm from './euclidean-algorithm';

describe('Euclidean Algorithm tests', () => {
  test('should return the correct greatest common denominator', () => {
    expect(euclideanAlgorithm(125, 625)).toBe(125);
  });

  test('should return -1 if their are no common denominators', () => {
    expect(euclideanAlgorithm(5, 123)).toBe(-1);
  });

  test('should return -1 if only one parameter is passed in', () => {
    expect(euclideanAlgorithm(123)).toBe(-1);
  });

  test('should return -1 if no parameters are passed in', () => {
    expect(euclideanAlgorithm()).toBe(-1);
  });
});
